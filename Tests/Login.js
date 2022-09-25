import { Selector,t } from 'testcafe';

import SignUpPage from '../PageObjects/SignUpPage';
import loginPage from '../PageObjects/LoginPage';
import testdata from '../TestData/TestData.json';

const login = new loginPage();
const signUp = new SignUpPage();

fixture`Getting Started`
    .page`https://poetic-arithmetic-b9b05a.netlify.app/`;

test('Signup to the FB page' , async t =>{
        await signUp.SignUpFlow(testdata.firstName,testdata.surName,testdata.emailID,testdata.passWord);
        console.log("Signup to the FB page")
       
}).meta('group', 'signup');
    

test('Login to the FB application 1', async t => {

    await login.LoginFlow(testdata.username, testdata.passWord);
    console.log("Login to the FB application 1")

}).meta('group', 'login');

test('Login to the FB application 2', async t => {

    await login.LoginFlow(testdata.username, testdata.passWord);
    console.log("Login to the FB application 2")

}).meta('group', 'login');


test('Login to the FB application 3', async t => {

    await login.LoginFlow(testdata.username, testdata.passWord);
    console.log("Login to the FB application 3")

}).meta('group', 'login');

test('Login to the FB application 4', async t => {

    await login.LoginFlow(testdata.username, testdata.passWord);
    console.log("Login to the FB application 4")

}).meta('group', 'login');
