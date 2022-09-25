import { Selector,t } from 'testcafe';
import FriendsPage from '../PageObjects/FriendsPage';
import testdata from '../TestData/TestData.json';


const friends = new FriendsPage();

fixture`Getting Started`
    .page`https://poetic-arithmetic-b9b05a.netlify.app/`;

test('Validate Friends page' , async t =>{
        await friends.Friendsflow(testdata.username, testdata.passWord);
        console.log("Validated the Friends page")
       
}).meta('group', 'friends');
    
