import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, function () {
  browser.url("http://www.google.com");
  browser.pause(70000);
});

When(/^Search with (.*)$/, async function (SearchItem) {
  console.log(`>> searchItem: ${SearchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
});

Then(/^Click on the second Search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match(.*)$/, async function (expectedURL) {
  console.log(`>> expectedURL: ${expectedURL}`);
  let url = await browser.getUrl()
  chai.expect(url).to.equal(expectedURL)
});
