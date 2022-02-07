import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    isShow = false;
    property
    handleClick(event){
        this.isShow = true;
    }
    
    handlechange(event){
        this.property = event.target.value
    }
    get method1(){
        return this.property === 'hello';
    }

    isvisible = false;
    name = "Kishore";
    age = 22;
    company = "RaagviTech";
    number = 5
    handlepress(event){
        this.isvisible = true;
    }

    name1;
    handledifference(event){
        this.name1 = event.target.value
    }
    get method2(){
        return this.name1 === "kishore";
    }



}