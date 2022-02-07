import { LightningElement } from 'lwc';

export default class QuerySelectors extends LightningElement {
    usersList = ["john","nik","wills","david"];
    fetchDetails(event){
        let element = this.template.querySelector('h1');
        element.style.border = "1px solid red" ;
        console.log(element.innerText);

        const userelements = this.template.querySelectorAll(".name");
        Array.from(userelements).forEach(item => {
            console.log(item.innerText);
            item.setAttribute("title",item.innerText);
        });

        let ele = this.template.querySelector(".child");
        ele.innerHTML = "<p>I am a child</p>"
    }
}