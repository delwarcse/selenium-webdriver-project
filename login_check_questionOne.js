const { By, Builder, until } = require('selenium-webdriver');
async function test() {
    const driver = await new Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({
        implicit: 10000,
    });
        await driver.manage().window().maximize();
        await driver.get('https://www.saucedemo.com/');
        const userName = await driver
            .findElement(By.xpath('//input[@placeholder="Username"]'))
            .sendKeys('locked_out_user');
        const pass = await driver
            .findElement(By.xpath('//input[@placeholder="Password"]'))
            .sendKeys('secret_sauce');
        const login_Btn = await driver
            .findElement(By.xpath('//input[@name="login-button"]'))
        await login_Btn.click();
        const errMsg = await driver.wait(
            until.elementLocated(By.xpath('//h3[@data-test="error"]')),
        );
      const errorText = await errMsg.getText();
        console.log('Error Message:', errorText);
        if (errorText.includes('Epic sadface: Sorry, this user has been locked out.')) 
            {
            console.log('Test is Passed & message is correct....');
        } else {
            console.log('Test is Failed & message is not correct....');
        }
        await driver.sleep(7000);
        await driver.quit();
}
test();