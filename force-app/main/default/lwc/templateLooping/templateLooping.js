import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement { 
    carList = ["Ford","Honda","Mercedes","BMW","KIA"];

    ceoList = [
        {
            id : 1,
            company : "Google",
            name :"sundar pichai"
        },
        {
            id : 2,
            company : "Apple",
            name :"Tim Cook"
        },
        {
            id : 3,
            company : "Amazon",
            name :"Jeff Bezos"
        },
        {
            id : 4,
            company : "TCS",
            name :"Ratan Tata"
        },
        {
            id : 5,
            company : "RaagviTech",
            name :"nivas"
        },
        {
            id : 5,
            company : "Sathyam Computers",
            name :"Sathya"
        },
    ];


    empList = [
        {
            number : 1,
            name:"Kishore"
        },
        {
            number : 2,
            name:"sai"
        },
        {
            number : 3,
            name:"dattu"
        },
        {
            number : 4,
            name:"tharun"
        },
        {
            number : 5,
            name:"sai kumar"
        },
        {
            number : 6,
            name:"Ramesh"
        },
        {
            number : 7,
            name:"Guru"
        },
        {
            number : 8,
            name:"vijay"
        },
        {
            number : 9,
            name:"nivas"
        },
        {
            number : 10,
            name:"mojesh"
        }
    ]
}