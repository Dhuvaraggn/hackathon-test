import { Selector,t } from 'testcafe';
import DashboardPage from '../PageObjects/DashboardPage';
import loginPage from '../PageObjects/LoginPage';
import testdata from '../TestData/TestData.json';

const login = new loginPage();
const dashboard = new DashboardPage();

fixture`Getting Started`
    .page`https://poetic-arithmetic-b9b05a.netlify.app/`;

test('Login to the FB page' , async t =>{

        await login.LoginFlow(testdata.emailID,testdata.passWord);
        console.log("Logged in into the application")
       
}).meta('group', 'smoke-test');
    

test('Login to the FB application 1', async t => {

    await login.LoginFlow(testdata.emailID,testdata.passWord);
    await dashboard.CreateStoryFlow();
    console.log("test 2")

}).meta('group', 'smoke-test1');

test('Login to the FB application 2', async t => {

    await login.LoginFlow(testdata.emailID,testdata.passWord);
    await dashboard.CreateStoryFlow();
    console.log("test 2")

}).meta('group', 'smoke-test1');


test('Login to the FB application 3', async t => {

    await login.LoginFlow(testdata.emailID,testdata.passWord);
    await dashboard.CreateStoryFlow();
    console.log("test 2")

}).meta('group', 'smoke-test1');

test('Login to the FB application 4', async t => {

    await login.LoginFlow(testdata.emailID,testdata.passWord);
    await dashboard.CreateStoryFlow();
    console.log("test 2")

}).meta('group', 'smoke-test1');






