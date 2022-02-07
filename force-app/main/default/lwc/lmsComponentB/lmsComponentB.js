import { LightningElement, wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext,publish } from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {
    
    inputValue;
    @wire(MessageContext)
    context
    handleChange(event){
        this.inputValue = event.target.value;
    }
    connectedCallback(){
        this.handlePublish();
    }
    
    handlePublish(event){
        let message = {
            lmsData:{
                value : this.inputValue
            }
        }
        publish(this.context,SampleMessageChannel,message)
    }
    
}