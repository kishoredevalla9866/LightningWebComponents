import { LightningElement } from 'lwc';

export default class ParentComponent1 extends LightningElement {
    property = 'Hello';
    points = 0;
    expression=false;
    handlechange(event){
        this.property = event.target.value;
        this.points = event.target.value;
    }
    handleclick(event){

        this.expression= true;
    }


    obj = [
        {
            id :"1",
            Name:"kishore",
            Industry:"IT"
        },
        {
            id :"2",
            Name:"mary",
            Industry:"Teacher"
        },
        {
            id :"3",
            Name:"sai",
            Industry:"Hardware"
        },
    
    ];
}