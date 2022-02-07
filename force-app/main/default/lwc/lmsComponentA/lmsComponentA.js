import { LightningElement,wire } from 'lwc';
import sampleMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {MessageContext, publish} from 'lightning/messageService'
export default class LmsComponentA extends LightningElement {
    inputValue
    @wire(MessageContext)
    context

    handleChange(event){
        this.inputValue = event.target.value
    }



    handleClick(event){
       
        let message = {
            lmsData : {
                value : this.inputValue
            }
        }

        //publish(messageContext,MessageChannel,message)
        publish(this.context,sampleMC,message)
    }
}