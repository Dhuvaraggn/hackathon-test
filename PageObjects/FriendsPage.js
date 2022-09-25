import { Selector, t } from 'testcafe';
import XPathSelector from '../Utilities/xpath-selector';

export default class FriendsPage {

    constructor () {
        this.userName = XPathSelector("//input[@type='email']");
        this.password  = XPathSelector("//input[@type='password']");
        this.LoginButton =  XPathSelector("//button[text()='Log In']");
        this.friends = XPathSelector("//p[text()='Friends']")
        this.groups = XPathSelector("//p[text()='Groups']");
        this.marketplace = XPathSelector("//p[text()='Marketplace']");
        this.group = XPathSelector("//mat-icon[text()='group']");
        
    }

    async Friendsflow(username, password)
    {
        await t
                .maximizeWindow()
                .wait(3000)
                .typeText(this.userName,username)
                .typeText(this.password,password)
                .wait(5000)
                .click(this.LoginButton)
                .wait(5000)
                console.log(this.friends.innerText)
        await t
                .expect(this.friends.innerText).eql('Friends')
                .expect(this.groups.innerText).eql('Groups')
                .expect(this.marketplace.innerText).eql('Marketplace')
                .click(this.group);
                
    

    }

}