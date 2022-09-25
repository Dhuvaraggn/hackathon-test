import { Selector,t } from 'testcafe';
import GamingPage from '../PageObjects/GamingPage';
import testdata from '../TestData/TestData.json';


const gamingpage = new GamingPage();

fixture`Getting Started`
    .page`https://poetic-arithmetic-b9b05a.netlify.app/`;

test('Validate Gaming page' , async t =>{
        await gamingpage.GamingFlow(testdata.username, testdata.passWord);
        console.log("Validated the Gaming page")
       
}).meta('group', 'gaming');
    
