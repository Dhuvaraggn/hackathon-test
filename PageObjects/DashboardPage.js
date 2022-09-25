import { Selector, t } from 'testcafe';
import XPathSelector from '../Utilities/xpath-selector';


export default class DashboardPage {

    constructor () {
        this.createStory = XPathSelector("//i[@class='fa fa-plus']");
        this.photoStory = XPathSelector("//div[text()=' Create a photo story ']");
        this.textStory = XPathSelector("//div[text()=' Create a text story ']");
        this.closeButton  = XPathSelector("//button[@type='button']");
        this.statusUpdate = XPathSelector("//textarea[contains(@placeholder,'on your mind?')]");
        this.profileIcon = XPathSelector("//div[text()='Mark']");
        this.arrowDropDown = XPathSelector("//mat-icon[text()='arrow_drop_down']")
    }

    async CreateStoryFlow()
    {
        await t
                .expect(this.statusUpdate.innerText).eql('')
                console.log("Status update")
                .expect(this.profileIcon.innerText).eql('')
                console.log("Groups icon is present")
                .expect(this.arrowDropDown.innerText).eql('') 
                console.log("Arrow drop down")
                
    }
   
}