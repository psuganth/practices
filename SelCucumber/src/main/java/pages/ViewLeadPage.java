package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.java.en.Then;
import wdMethods.ProjectMethods;


public class ViewLeadPage extends ProjectMethods  {

	public ViewLeadPage(){
		PageFactory.initElements(driver, this);		
	}
	
	@FindBy(how=How.ID,using="viewLead_firstName_sp")
	public WebElement eleLeadLink;
	
	@Then("Verify First Name (.*)")
	public ViewLeadPage verifyFirstName(String fname) {
		verifyPartialText(eleLeadLink, fname);
		return this;
	}
	
	

	
	
}
