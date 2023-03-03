const puppeteer = require('puppeteer');

const ytURI = "https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https://www.youtube.com/signin?action_handle_signin=true&app=desktop&hl=en&next=https%3A%2F%2Fwww.youtube.com%2F&hl=en&ec=65620";

(async() => {
    const browser = await puppeteer.launch();
    console.log("buidling puppeteer")
    const page = await browser.newPage();
    console.log("navgiating to page")
    await page.goto(ytURI);
    console.log("taking screenshot of page")
    await page.screenshot({ path:  "page_view.png" });
    browser.close();
    console.log("opteration complete - closing ")
})()