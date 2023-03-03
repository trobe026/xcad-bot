const puppeteer = require('puppeteer');

const ytURI = "https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https://www.youtube.com/signin?action_handle_signin=true&app=desktop&hl=en&next=https%3A%2F%2Fwww.youtube.com%2F&hl=en&ec=65620";
const email = "travis.roberts2@gmail.com";
const pswrd = "test";

(async() => {
    const browser = await puppeteer.launch();
    console.log("buidling puppeteer")
    const page = await browser.newPage();
    console.log("navgiating to page");
    await page.goto(ytURI);
    await page.waitForSelector('input[type=email]');
    console.log("email: " + email);
    await page.$eval('input[type=email]', el => el.value = "travis.roberts2@gmail.com");
    console.log("taking screenshot of email page");
    await page.screenshot({ path:  "email_input.png" });
    await page.click("#identifierNext");
    //await page.waitForSelector('input[type=password]');
    console.log("taking screenshot of password page");
    await page.screenshot({ path:  "password_input.png" });
    await page.$eval('input[type=password]', el => el.value = pswrd);
    console.log("taking screenshot of password page with password");
    await page.screenshot({ path:  "password_input_2.png" });
    browser.close();
    console.log("opteration complete - closing ");
})();