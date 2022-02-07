import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isShow = false;
    obj;
    handleClick(event){
        this.isShow=true;
    }
    handlebutton(event){
        this.obj = event.detail
        this.isShow=false;
        console.log("I am hadleButton")
    }
}