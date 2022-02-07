import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(event){
        const myEvent = new CustomEvent('close',{
            bubbles : true,
            detail : [
                {
                    id : 1,
                    Name:"Kishore",
                    Industry:"Automobile"
                },
                {
                    id : 2,
                    Name:"mary",
                    Industry:"Teacher"
                }

            ]
        });
        this.dispatchEvent(myEvent);
        console.log("I am the close handler")
    }
    footerHandler(event){
        console.log("I am the Footer Handler");
    }
   
}