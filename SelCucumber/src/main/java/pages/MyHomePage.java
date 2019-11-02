package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.java.en.Given;
import wdMethods.ProjectMethods;



public class MyHomePage extends ProjectMethods {

	public MyHomePage(){
		PageFactory.initElements(driver, this);
	}

	@FindBy(how=How.LINK_TEXT,using="Leads")
	public WebElement eleLeadLink;
	// Click Leads 
	@Given("click Leads")
	public MyLeadsPage clickLeadLink(){
		click(eleLeadLink);
		return new MyLeadsPage();
	}


}
