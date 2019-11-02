package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.java.en.Given;
import wdMethods.ProjectMethods;


public class MyLeadsPage extends ProjectMethods {

	public MyLeadsPage(){
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.LINK_TEXT,using="Create Lead")
	public WebElement elecreateLead;
	// Click Create Leads 
	
	@Given("click Create Lead Link")
	public CreateLeadPage clickCreateLead(){
		click(elecreateLead);
		return new CreateLeadPage();
	}

	
	
	

}
