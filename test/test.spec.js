var webdriverio = require('webdriverio');
const LoginPage = require('./pageobjects/login.page');
const SecurePage = require('./pageobjects/secure.page');

describe('WebdriverIO Sample Test', async function () {
    it('FirstTest With WDIO Mocha', async function () {
        const browser = await webdriverio.multiremote({
            myChromeBrowser: {
                capabilities: {
                    browserName: 'chrome'
                }
            },
        })
        await browser.url('');

        const inputElem = await browser.$('');
        await inputElem.setValue('WebdriverIO');
    
        const submitBtn = await browser.$('');
        await submitBtn.click();
    
        console.log(await browser.getTitle());
    
        await browser.deleteSession();

    })
});