const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const takeScreenshot = async (url, destination) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({
    path: destination,
    clip: {
      x: 0,
      y: 0,
      width: 880,
      height: 440,
    },
  });

  await browser.close();
};

const main = async () => {
  const baseUrl = 'http://localhost:8000/';
  const cacheTalkFile = path.join('./.cache/talks.txt');
  const content = fs.readFileSync(cacheTalkFile, { encoding: 'utf-8' });
  const talks = content.split('|').filter(Boolean);
  const basePath = path.join('./.social_cards');
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  }
  for (let i = 0; i < talks.length; i++) {
    const slug = talks[i];
    const destinationFile = path.join(basePath, `${slug}.png`);

    // if (!fs.existsSync(destinationFile)) {
    await takeScreenshot(`${baseUrl}${slug}/preview`, destinationFile);
    console.log(`Created ${destinationFile}`);
    // }
  }
};

main();
