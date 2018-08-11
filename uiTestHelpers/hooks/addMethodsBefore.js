const path = require('path');
const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));
// const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'conf.js'));

const appendInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/appendInputFieldValue');
const appendReactInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/appendReactInputFieldValue');
const clearInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/clearInputFieldValue');
const clickElement = require('../../uiTestHelpers/stepDefinitions/actions/clickElement');
const disableAnimations = require('../../uiTestHelpers/stepDefinitions/actions/disableAnimations');
const goToPage = require('../../uiTestHelpers/stepDefinitions/actions/goToPage');
const pressKey = require('../../uiTestHelpers/stepDefinitions/actions/pressKey');
const setCookie = require('../../uiTestHelpers/stepDefinitions/actions/setCookie');
const setInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/setInputFieldValue');
const setReactInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/setReactInputFieldValue');
const setSelectValueByOptionText = require('../../uiTestHelpers/stepDefinitions/actions/setSelectValueByOptionText');
const submitForm = require('../../uiTestHelpers/stepDefinitions/actions/submitForm');
const checkAttribute = require('../../uiTestHelpers/stepDefinitions/checks/checkAttribute');
const checkClass = require('../../uiTestHelpers/stepDefinitions/checks/checkClass');
const checkColour = require('../../uiTestHelpers/stepDefinitions/checks/checkColour');
const checkContainsAnyText = require('../../uiTestHelpers/stepDefinitions/checks/checkContainsAnyText');
const checkContainsText = require('../../uiTestHelpers/stepDefinitions/checks/checkContainsText');
const checkCookieContains = require('../../uiTestHelpers/stepDefinitions/checks/checkCookieContains');
const checkCookieContent = require('../../uiTestHelpers/stepDefinitions/checks/checkCookieContent');
const checkCookieExists = require('../../uiTestHelpers/stepDefinitions/checks/checkCookieExists');
const checkElementBackgroundColour = require('../../uiTestHelpers/stepDefinitions/checks/checkElementBackgroundColour');
const checkElementBorderColour = require('../../uiTestHelpers/stepDefinitions/checks/checkElementBorderColour');
const checkElementColour = require('../../uiTestHelpers/stepDefinitions/checks/checkElementColour');
const checkElementExists = require('../../uiTestHelpers/stepDefinitions/checks/checkElementExists');
const checkElementExistsNTimes = require('../../uiTestHelpers/stepDefinitions/checks/checkElementExistsNTimes');
const checkEventualUrlFromPOM = require('../../uiTestHelpers/stepDefinitions/checks/checkEventualUrlFromPOM');
const checkFocus = require('../../uiTestHelpers/stepDefinitions/checks/checkFocus');
const checkInputIsEmpty = require('../../uiTestHelpers/stepDefinitions/checks/checkInputIsEmpty');
const checkInputValue = require('../../uiTestHelpers/stepDefinitions/checks/checkInputValue');
const checkIsEnabled = require('../../uiTestHelpers/stepDefinitions/checks/checkIsEnabled');
const checkIsOpenedInNewWindow = require('../../uiTestHelpers/stepDefinitions/checks/checkIsOpenedInNewWindow');
const checkIsSelected = require('../../uiTestHelpers/stepDefinitions/checks/checkIsSelected');
const checkTitle = require('../../uiTestHelpers/stepDefinitions/checks/checkTitle');
const checkUrl = require('../../uiTestHelpers/stepDefinitions/checks/checkUrl');
const checkUrlContainsString = require('../../uiTestHelpers/stepDefinitions/checks/checkUrlContainsString');
const checkVisibility = require('../../uiTestHelpers/stepDefinitions/checks/checkVisibility');

Before(function addMethodsBeforeHook() {
  this.appendInputFieldValue = appendInputFieldValue;
  this.appendReactInputFieldValue = appendReactInputFieldValue;
  this.clearInputFieldValue = clearInputFieldValue;
  this.clickElement = clickElement;
  this.disableAnimations = disableAnimations;
  this.goToPage = goToPage;
  this.pressKey = pressKey;
  this.setCookie = setCookie;
  this.setInputFieldValue = setInputFieldValue;
  this.setReactInputFieldValue = setReactInputFieldValue;
  this.setSelectValueByOptionText = setSelectValueByOptionText;
  this.submitForm = submitForm;
  this.checkAttribute = checkAttribute;
  this.checkClass = checkClass;
  this.checkColour = checkColour;
  this.checkContainsAnyText = checkContainsAnyText;
  this.checkContainsText = checkContainsText;
  this.checkCookieContains = checkCookieContains;
  this.checkCookieContent = checkCookieContent;
  this.checkCookieExists = checkCookieExists;
  this.checkElementBackgroundColour = checkElementBackgroundColour;
  this.checkElementBorderColour = checkElementBorderColour;
  this.checkElementColour = checkElementColour;
  this.checkElementExists = checkElementExists;
  this.checkElementExistsNTimes = checkElementExistsNTimes;
  this.checkEventualUrlFromPOM = checkEventualUrlFromPOM;
  this.checkFocus = checkFocus;
  this.checkInputIsEmpty = checkInputIsEmpty;
  this.checkInputValue = checkInputValue;
  this.checkIsEnabled = checkIsEnabled;
  this.checkIsOpenedInNewWindow = checkIsOpenedInNewWindow;
  this.checkIsSelected = checkIsSelected;
  this.checkTitle = checkTitle;
  this.checkUrlIs = function(url) { return checkUrl.call(this, false, url); };
  this.checkUrlIsNot = function(url) { return checkUrl.call(this, true, url); };
  this.checkUrlContainsString = checkUrlContainsString;
  this.checkVisibility = checkVisibility;
});