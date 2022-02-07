import { LightningElement } from 'lwc';

export default class DynamicStyling extends LightningElement {
    percent = 10;
    handlechange(event){
        this.percent = event.target.value;
    }
    get percentage(){
        if(this.percent>=10 && this.percent<=100){
            return `width: ${this.percent}%`;
        }
        
    }
}