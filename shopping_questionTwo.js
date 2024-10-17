const { By, Builder, until } = require('selenium-webdriver');

async function shoppingCheck() {
  let driver = await new Builder().forBrowser('chrome').build();
  driver.manage().setTimeouts({
    implicit: 16000,
});
    await driver.manage().window().maximize();
    await driver.get('https://www.saucedemo.com/');
    await driver
    .findElement(By.xpath('//input[@placeholder="Username"]'))
    .sendKeys('standard_user');
    await driver
    .findElement(By.xpath('//input[@placeholder="Password"]'))
    .sendKeys('secret_sauce');
    await driver
    .findElement(By.xpath('//input[@name="login-button"]')).click();

    await driver
    .findElement(By.xpath('//button[@id="react-burger-menu-btn"]')).click();
    await driver
    .wait(until.elementLocated(By.xpath('//a[@id="reset_sidebar_link"]'))).click();

    await driver
    .findElement(By.xpath('(//button[text()="Add to cart"])[1]')).click();
    await driver
    .findElement(By.xpath('(//button[text()="Add to cart"])[2]')).click();
    await driver
    .findElement(By.xpath('(//button[text()="Add to cart"])[3]')).click();
   

    await driver
    .findElement(By.xpath('//a[@class="shopping_cart_link"]')).click();
    await driver
    .findElement(By.xpath('//button[@name="checkout"]')).click();

    await driver
    .findElement(By.xpath('//input[@placeholder="First Name"]'))
    .sendKeys('Mohammad');
    await driver
    .findElement(By.xpath('//input[@placeholder="Last Name"]'))
    .sendKeys('Delwar Hosen');
    await driver
    .findElement(By.xpath('//input[@placeholder="Zip/Postal Code"]'))
    .sendKeys('4382');
    await driver
    .findElement(By.xpath('//input[@name="continue"]')).click();

    await driver
    .findElement(By.xpath('//button[@name="finish"]')).click();
    let message = await driver
    .findElement(By.xpath('//h2[@class="complete-header"]')).getText();
    console.log('Shopping TEST successfully completed');

    await driver
    .findElement(By.xpath('//button[@id="react-burger-menu-btn"]')).click();
    await driver
    .wait(until.elementLocated(By.xpath('//a[@id="reset_sidebar_link"]'))).click();
    await driver
    .findElement(By.xpath('//a[@id="logout_sidebar_link"]')).click();
  
    await driver.sleep(3000);
    await driver.quit();
}
shoppingCheck();