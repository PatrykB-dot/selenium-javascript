let webdriver = require ('selenium-webdriver');
By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('firefox').build();
async function main(){
await driver.get('https://library-app.firebaseapp.com')
await driver.findElement(By.css('input')).sendKeys('xxx@xxx.com');
await driver.findElement(By.css('.btn-primary')).click();
await driver.quit();
}
main();