import { LightningElement } from 'lwc';
import signin from './signinTemplate.html';
import signup from './signupTemplate.html';
import defaultTemplate from'./renderMethod.html';
export default class RenderMethod extends LightningElement {
    isShow = '';
    render(){
        return this.isShow === 'signin' ? signin : this.isShow === 'signup' ? signup : defaultTemplate;
    }

    handleclick(event){
        this.isShow = event.target.label;
    }
    submithandler(event){
        console.log(`${event.target.label} successfully!!!!!`);
    }
}