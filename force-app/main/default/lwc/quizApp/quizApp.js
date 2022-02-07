import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} //used to store the answers 
    correctanswers = 0;// to store the number of correct answer
    isSubmitted = false; // used to show the total score
    myQuestions = [
        {
            id : "Question1",
            question : "Which of the following is not a loop ?",
            options : {
                a:"for:each",
                b:"iterator",
                c:"maploop"
            },
            correctAnswer : "c"
        },
        {
            id : "Question2",
            question : "Which of the following file is not supported in lwc ?",
            options : {
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer : "b"
        },
        {
            id : "Question3",
            question : "Which of the following is not a directive ?",
            options : {
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer : "c"
        }
    ];
    //get is used to send the data back to the html by doing some expressions
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    // this get is used to style our result
    get isScroefull(){
        return `slds-text-heading_large ${this.correctanswers === this.myQuestions.length ? 
            "slds-text-color_success" : "slds-text-color_error"} slds-var-m-around_medium`
    }
    // this is used to catch the changes made in the given options
    changeHandler(event){
        console.log("name :", event.target.name);
        console.log("Value :", event.target.value);
        const {name,value} = event.target;
        // this.name = event.target.name;
        // this.value = event.target.value;
        this.selected = {...this.selected,[name]:value};
        console.log(this.selected);
    }
    // this method id used to handle the submit button
    handleSubmit(event){
        event.preventDefault();
        console.log('Hiiii');
        let correct = this.myQuestions.filter(item=> this.selected[item.id] === item.correctAnswer);
        this.correctanswers  = correct.length;
        console.log("Number of Correct answers are ", this.correctanswers);
        this.isSubmitted = true;
    }
    // this method is used to handle the reset button
    handleReset(event){
       this.selected = {};
       this.correctanswers = 0;
       this.isSubmitted = false;
    }



}