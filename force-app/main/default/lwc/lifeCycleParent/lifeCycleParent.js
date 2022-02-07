import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isShow = false;
    handleClick(event){
        this.isShow = ! this.isShow;
    }

    constructor(){
        super();
        console.log("Parent Constructor called");
    }
    connectedCallback(){
        console.log("parent connectedCallback called");
    }
    renderedCallback(){
        console.log("parent renderedCallback called");
    }

    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }

}