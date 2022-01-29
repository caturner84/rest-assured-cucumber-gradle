$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "This is the feature file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I call the endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Customer.i_call_the_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer.i_should_see_the_response()"
});
formatter.result({
  "status": "passed"
});
});