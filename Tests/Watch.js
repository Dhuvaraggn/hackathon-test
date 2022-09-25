import { Selector,t } from 'testcafe';
import WatchPage from '../PageObjects/WatchPage';
import testdata from '../TestData/TestData.json';


const watch = new WatchPage();

fixture`Getting Started`
    .page`https://poetic-arithmetic-b9b05a.netlify.app/`;

test('Validate Watch page' , async t =>{
        await watch.WatchFlow(testdata.username, testdata.passWord);
        console.log("Validated the Watch page")
       
}).meta('group', 'watch');
    
