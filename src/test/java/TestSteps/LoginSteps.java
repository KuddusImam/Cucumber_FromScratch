package TestSteps;

import cucumber.api.java.After;
import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;


public class LoginSteps {

    WebDriver driver;

    @Given("Browser is opened")
    public void browser_is_opened() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @Given("Website is uploaded")
    public void website_is_uploaded() {
        driver.navigate().to("http://www.google.com");
        driver.findElement(By.linkText("Sign in")).click();

    }

    @When("User enters username and password")
    public void user_enters_username_and_password() {
        WebElement email = driver.findElement(By.xpath(".//input[@type='email']"));
        email.sendKeys("ikuddus@gmail.com" + Keys.ENTER);

        WebElement password = driver.findElement(By.xpath(".//input[@type='password' and @name='password']"));
        //".//*[@id="password"]/div[1]/div/div[1]/input"
        new Actions(driver).pause(5000).perform();
        password.sendKeys("********" + Keys.ENTER);
    }



}

