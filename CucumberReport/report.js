$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/syntax.feature");
formatter.feature({
  "name": "This is first feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Loged in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Website is uploaded",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.website_is_uploaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test the log in functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "mmm",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});