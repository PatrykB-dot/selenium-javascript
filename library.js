let webdriver = require ('selenium-webdriver');
By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('firefox').build();
async function main(){
await driver.get('https://library-app.firebaseapp.com')
await driver.findElement(By.css('input')).sendKeys('xxx@xxx.com');
await driver.findElement(By.css('.btn-primary')).click();
await (await driver).findElements(By.css('li')).then(function(elements){
    elements.map(function(element){
        element.getText().then(function(txt){
            console.log(txt);
        })
    })
})
setTimeout(()=>{
    driver.quit();
},3000) 
}
main();