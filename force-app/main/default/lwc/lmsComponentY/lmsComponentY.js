import { LightningElement, wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, MessageContext,subscribe, unsubscribe } from 'lightning/messageService';
export default class LmsComponentY extends LightningElement {
    recieved
    sub
    @wire(MessageContext)
    context

    connectedCallback(){
        this.handleSubscribe();
    }

    handleSubscribe(){
        this.sub = subscribe(this.context,SampleMessageChannel,(message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.recieved = message.lmsData.value ?  message.lmsData.value : "No Message Published"
    }

    handleunsubscribe(){
        unsubscribe(this.sub)
        this.sub=null
    }
}