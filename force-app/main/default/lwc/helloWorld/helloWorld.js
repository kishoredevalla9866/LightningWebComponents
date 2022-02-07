import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    /* Two Way Binding */
    greeting = "Good Afternoon";
    name = "test";
    handleChange(event){
        this.name = event.target.value;
    }

    /* @track properties */
    @track address = {
        city : "Hyderabad",
        state : "Ts"
    };
    trackchange(event){
        this.address.city = event.target.value
    }


    /* Getter in Lwc */
    users = ["john","smith","wills"];
    
    get firstuser(){
        return this.users[0].toUpperCase();
    }

    num1 = 15;
    num2 = 20;
    get multiply(){
        return this.num1 * this.num2
    }

    
}