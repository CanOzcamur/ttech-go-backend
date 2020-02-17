package com.kafein.ttechgo.demo.ttechgoserver;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumUserTest {

	protected WebDriver driver;
	
	@Test
	public void setUp() throws Exception{
		System.setProperty("webdriver.chrome.driver","WebDriver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("http://localhost:8080");
		driver.findElement(By.xpath("//*[@id=\"inlineFormInputGroup\"]")).sendKeys("5325320000");
		driver.findElement(By.xpath("/html/body/app-root/app-user-page/div/div/div/div/div[2]/a")).click();

		 
	    driver.findElement(By.xpath("//*[@id=\"tv+\"]")).click();
	    driver.findElement(By.xpath("//*[@id=\"fizy\"]")).click();
	    
		driver.manage().wait(3000);
	    driver.manage().window().maximize();
		
	    
	    //driver.close();
	}
}
