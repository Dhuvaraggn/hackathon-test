import { Selector,t } from 'testcafe';
import MarketPlacePage from '../PageObjects/MarketPlacePage';
import testdata from '../TestData/TestData.json';


const marketplace = new MarketPlacePage();

fixture`Getting Started`
    .page`https://poetic-arithmetic-b9b05a.netlify.app/`;

test('Validate MarketPlace page' , async t =>{
        await marketplace.MarketPlaceFlow(testdata.username, testdata.passWord);
        console.log("Validated the MarketPlace page")
       
}).meta('group', 'marketplace');
    
