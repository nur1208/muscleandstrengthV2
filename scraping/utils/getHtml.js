import puppeteer from "puppeteer";

export const getHtml = async (url, waitForSelector, timeout) => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto(url, {
    timeout,
  });
  await page.waitForSelector(waitForSelector, { timeout });
  const html = await page.evaluate(
    () => document.body.innerHTML
  );

  await browser.close();

  return html;
};
