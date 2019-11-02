$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/CreateLead.feature");
formatter.feature({
  "name": "Create Lead",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Babu"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create a new Lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "Enter userName \u003cusername\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click Login",
  "keyword": "And "
});
formatter.step({
  "name": "click CRM/SFA",
  "keyword": "And "
});
formatter.step({
  "name": "click Leads",
  "keyword": "And "
});
formatter.step({
  "name": "click Create Lead Link",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Company Name \u003ccompany\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter First Name \u003cfname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Last Name \u003clname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click Create Lead Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify First Name \u003cfname\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "company",
        "fname",
        "lname"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "TL",
        "Babu",
        "M"
      ]
    },
    {
      "cells": [
        "Democsr",
        "crmsfa",
        "Qeagle",
        "Gopi",
        "J"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create a new Lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Babu"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter userName DemoSalesManager",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRM/SFA",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Leads",
  "keyword": "And "
});
formatter.match({
  "location": "MyHomePage.clickLeadLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Create Lead Link",
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadsPage.clickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Company Name TL",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter First Name Babu",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Last Name M",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Create Lead Button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.clickCreateLeadSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify First Name Babu",
  "keyword": "And "
});
formatter.match({
  "location": "ViewLeadPage.verifyFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a new Lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Babu"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter userName Democsr",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRM/SFA",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Leads",
  "keyword": "And "
});
formatter.match({
  "location": "MyHomePage.clickLeadLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Create Lead Link",
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadsPage.clickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Company Name Qeagle",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter First Name Gopi",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Last Name J",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Create Lead Button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.clickCreateLeadSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify First Name Gopi",
  "keyword": "And "
});
formatter.match({
  "location": "ViewLeadPage.verifyFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});