import { LightningElement,api } from 'lwc';

export default class SetterChildComponent extends LightningElement {
    userDetails
    @api 
    get details(){
        return this.userDetails;
    }
    set details(data){
        let newAge = data.age*2;
        let newName = `${data.name} kumar`
        this.userDetails = {...data, age:newAge, "location":"Sathupally", name:newName}
    }
}