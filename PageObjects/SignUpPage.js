import { Selector, t } from 'testcafe';
import XPathSelector from '../Utilities/xpath-selector';


export default class SignUpPage {

    constructor () {
        this.signUpButton = XPathSelector("//button[text()='Create New Account']");
        this.firstName  = XPathSelector("//input[@placeholder='First name']");
        this.surName =  XPathSelector("//input[@placeholder='Surname']");
        this.emailID =  XPathSelector("//input[@placeholder='Mobile number or email address']");
        this.passWord = XPathSelector("//input[@placeholder='New password']");
        this.gender = XPathSelector("//label[text()='Male ']");
        this.signUp = XPathSelector("//button[text()='Sign Up']");
        this.closeSignUpModal = XPathSelector("//button[@class='btn-close']");

    }
    async SignUpFlow(firstName, surName, emailID,passWord)
    {
        await t
        .maximizeWindow()
        .wait(3000)
        .click(this.signUpButton)
        .typeText(this.firstName, firstName)
        .typeText(this.surName,surName)
        .typeText(this.emailID,emailID)
        .typeText(this.passWord,passWord)
        .click(this.gender)
        // .click(this.signUp)
        .click(this.closeSignUpModal)
        .wait(5000);


    }
}