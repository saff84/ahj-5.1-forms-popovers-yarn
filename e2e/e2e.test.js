import puppeteer from "puppeteer";
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe("card validator form", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);

    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    
    browser = await puppeteer.launch();
    page = await browser.newPage(); //браузер открывает страницу
  });
  //закрывает браузер
  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test("tooltip show on page", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".container");
    const button = await page.$(".btn");
    await button.click();
    await page.waitForSelector(".tooltip");
  });
  
});