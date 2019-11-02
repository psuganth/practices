package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import wdMethods.ProjectMethods;

public class CreateLeadPage  extends ProjectMethods {


	public CreateLeadPage(){
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.ID,using="createLeadForm_companyName")
	private WebElement companyName;
	@Given("Enter Company Name (.*)")
	public CreateLeadPage enterCompanyName(String comnyName){
		type(companyName, comnyName);
		return this;

	}

	@FindBy(how=How.ID,using="createLeadForm_firstName")
	private WebElement eleFirstName;
	@Given("Enter First Name (.*)")
	public CreateLeadPage enterFirstName(String firstName){
		type(eleFirstName, firstName);
		return this;
	}

	@FindBy(how=How.ID,using="createLeadForm_lastName")
	private WebElement eleLastName;
	@Given("Enter Last Name (.*)")
	public CreateLeadPage enterLastName(String lastName){
		type(eleLastName, lastName);
		return this;

	}

	@FindBy(how=How.CLASS_NAME,using="smallSubmit")
	private WebElement eleCreateLeadSubmit;
	
	@And("Click Create Lead Button")
	public ViewLeadPage clickCreateLeadSubmit(){
		click(eleCreateLeadSubmit);
		return new ViewLeadPage();
	}
	
	@FindBy(how=How.ID,using="createLeadForm_primaryEmail")
	private WebElement eleEmail;
	public CreateLeadPage enterEmail(String eMail){
		type(eleEmail, eMail);
		return this;
	}
}
