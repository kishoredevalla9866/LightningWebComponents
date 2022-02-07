import { LightningElement,api } from 'lwc';

export default class LwcToAuraCommunication extends LightningElement {
    @api title;
    handleClick(evevnt){
        let evt = new CustomEvent('lwctoaura',{
            detail : {
                "msg" : "Good Morning Everyone"
            }
        })
        this.dispatchEvent(evt)
    }
}