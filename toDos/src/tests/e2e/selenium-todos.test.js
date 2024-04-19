const selenium = require("selenium-webdriver");

describe("My Selenium Tests", () => {
  let driver = null;

  beforeAll(async () => {
    driver = await new selenium.Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/");
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("should verify h1 text", async () => {
    const h1Element = await driver.findElement(selenium.By.css("h1"));
    const actualText = await h1Element.getText();
    const expectedText = "Things I should stop procrastinating:";
    expect(actualText).toBe(expectedText);
  });

  test("Add Item to List", async () => {
    // Find the text input element
    const inputElement = await driver.findElement(
      selenium.By.css("[placeholder='Type an item here']")
    );
    for (const char of "Eat more ice cream") {
      await inputElement.sendKeys(char);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    /* for (const char of "Eat more ice cream") {
      setTimeout(await inputElement.sendKeys(char), 50);
    } */

    // await inputElement.sendKeys("Eat more ice cream");

    await inputElement.sendKeys(selenium.Key.RETURN);
    await driver.sleep(2000);

    const listItems = await driver.findElements(selenium.By.css("li"));
    const lastItemText = await listItems[listItems.length - 1].getText();
    expect(lastItemText).toBe("Eat more ice cream");
  });

  test("Clicking the 'Finish the list' button should clear the list", async() => {
    // Find the Finish the list button
    const finishBtnElem = await driver.findElement(
      selenium.By.xpath("//button[normalize-space()='Finished the list!']")
    );

    await driver.sleep(2000);
    await finishBtnElem.click();
    await driver.sleep(2000);

    const listItems = await driver.findElements(selenium.By.css("li"));
    expect(listItems.length).toBe(0);
  });

});
