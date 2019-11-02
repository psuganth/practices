@Babu
Feature: Duplicate Lead

@sanity
Scenario Outline:Duplicate an existing lead

Given Enter userName <username>
And Enter password <password>
And click Login
And click CRM/SFA
And click Leads
And click Find Lead Link
And Enter First Name <fname>
And Click FindLead Button 
And Click on First Matching Link
And Click Duplicate Lead
And Click Submit
And Verify the First Name <fname>


Examples: 
|username|password|company|fname|
|DemoSalesManager|crmsfa|TL|Babu|
|Democsr|crmsfa|Qeagle|Gopi|











