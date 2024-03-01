import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { AcessMenu } from './MenuAction';

const ActMenu = new AcessMenu

Given(`que cliquei no menu {string}`, (menu) => {
    ActMenu.AcessaMenu(menu)
});