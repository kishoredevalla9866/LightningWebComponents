import { LightningElement, wire } from 'lwc';
import sampleMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe} from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {
    recievedMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage();
    }

    subscribeMessage(){
        // subscribe(messageContext,messageChannel,listener,subscriberOptions)
        this.subscription = subscribe(this.context,sampleMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.recievedMessage = message.lmsData.value ? message.lmsData.value : "No message was published"
    }

    handleUnsubscribe(event){
        unsubscribe(this.subscription)
        this.subscription = null
    }
    
}