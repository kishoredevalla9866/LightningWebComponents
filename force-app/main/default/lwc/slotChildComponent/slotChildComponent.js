import { LightningElement } from 'lwc';

export default class SlotChildComponent extends LightningElement {
    handleFooter(){
        let footerele = this.template.querySelector('.slds-card__footer');
        if(footerele){
            footerele.classList.remove('slds-hide')

        }
    }
}