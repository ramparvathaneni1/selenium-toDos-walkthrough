# Adding Selenium to our To-Do Tests

## Clone This Repository Into Your Virtual Machine

1. Open your terminal.

2. To access the mef directory, please navigate to it from your home directory using the command `cd ~/mef`

3. clone this repository into your virtual machine using the command:

  ```bash
  git clone git@git.generalassemb.ly:ModernEngineering/selenium-todos-walkthrough.git`
  ```
4. After cloning the repository cd into the selenium-todos-walkthrough directory using the command
`cd selenium-todos-walkthrough`

5. Now cd into the toDos directory where our react starter code is located using the command `cd toDos`

6. Now open in vs code with the command `code .`

7. Make sure to run the command to install the dependencies from our package.json with the command `npm install`

8. Go head and start your react application running the command `npm start`


## Objectives

* **Install Selenium WebDriver:**
  Learn how to install and configure Selenium WebDriver for use with the Firefox browser in a JavaScript environment.

* **Control Browsers Remotely with JavaScript using Selenium:**
  Understand how to use Selenium to programmatically control browser actions with JavaScript, including launching and navigating the Firefox browser.

* **Load Webpages:**
  Automate the process of opening and loading webpages, with a focus on loading the local to-do application at `http://localhost:3000`.

* **Find HTML Elements on the Page:**
  Learn to locate various HTML elements on the to-do application's webpage using Selenium’s WebDriver.

* **Click on HTML Elements:**
  Master clicking on buttons like "Add it!" and "Finished the list!" through Selenium-driven browser interactions.

* **Insert Text into HTML Input Elements:**
  Practice inserting text into input fields, simulating user inputs in the to-do application.

* **Verify Text Content of HTML Elements:**
  Develop techniques to verify the text content of HTML elements, ensuring the application behaves as expected, such as checking the H1 tag and validating list updates.

  ## User Stories

  We will now proceed to use selenium to complete e2e tests of these user stories for our toDos react application.

1. **Verify Header Text:**
   - The H1 tag should have the text "Things I should stop procrastinating:".

2. **Add Item to List:**
   - The user enters the text "Eat more ice cream" into the text input and clicks the "Add it!" button. The last item in the list should now have the text "Eat more ice cream".

3. **Clear the List:**
   - The user clicks the "Finished the list!" button. The list should now be empty.


## Installing Selenium

Now install the `selenium-webdriver` package for this project, so we can use it in our tests using the command in a separete terminal:

```bash
npm install selenium-webdriver
```

Inside of your src directory you will see a directory for tests inside that directory is a folder for component test with the App.test.js which is running our jest component test.  In order to keep our tests organized we will be using a seperate folder called e2e which will hold our selenium-todos.test.js file.  Please make sure you are inside of selenium-todos.test.js


## Step 1: Import Selenium WebDriver

In this step, we import the `selenium-webdriver` package into our test script. The `selenium-webdriver` package allows us to programmatically control web browsers and perform actions such as opening web pages, interacting with web elements, and verifying web page content.

By requiring the `selenium-webdriver` package, we make its functionality available for use in our test script. This step is essential as it sets up the foundation for automating interactions with our web application.


**e2e/selenium-todos.test.js**

```javascript
const selenium = require('selenium-webdriver');
```

In this line of code, we import the selenium-webdriver library and assign it to the variable selenium. This variable will be used throughout our test script to interact with the Selenium WebDriver.


## Test 1: Verify Header Text

In this test, we aim to verify that the header text of our web application matches the expected text. We use Selenium WebDriver to automate this verification.

### Test Description

1. We begin by describing the test suite using `describe('My Selenium Tests', function () { ... })`. This test suite encompasses all the Selenium tests for our application.

*Note alternatively you may choose to use arrow function expression syntax as well, the test behavior will not change we will show the use of arrow function expression syntax setup in our next tests*

**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
//  our tests will go here all tests will be part of the My Selenium Tests Suite

})

```

2. Inside the test suite, we define our first test case using `test(' should verify h1 text', async function() { ... })`. This test case specifically focuses on verifying the header text.

**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {

    })

})

```

3. Within the test case:
   - We create a Selenium WebDriver instance for the Chrome browser using

   ```javascript
   const driver = await new selenium.Builder().forBrowser('chrome').build();`
   ```
   This sets up the WebDriver to control the browser.
   - We maximize the browser window to ensure consistent visibility using

   ```javascript
   await driver.manage().window().maximize();
   ```

   **e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {
      const driver = await new selenium.Builder().forBrowser('firefox').build();
      await driver.manage().window().maximize();
    })

})

```

4. We navigate to our web application by opening its URL with

```javascript
await driver.get('http://localhost:3000/');
```

**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {
        const driver = await new selenium.Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
    })

})

```

5. We locate the `<h1>` element of the web page using

```javascript

const h1Element = await driver.findElement(selenium.By.css('h1'));
```

**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {
        const driver = await new selenium.Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
        h1Element = await driver.findElement(selenium.By.css('h1'));
    })

})
```

6. We retrieve the actual text of the `<h1>` element using
```javascript
const actualText = await h1Element.getText();
````

**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {
        const driver = await new selenium.Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
        h1Element = await driver.findElement(selenium.By.css('h1'));
        const actualText = await h1Element.getText();
    })

})
```

7. We define the expected text that the header should have, which is 'Things I should stop procrastinating:'.

```javascript
const expectedText = 'Things I should stop procrastinating:';
```

**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {
        const driver = await new selenium.Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
        h1Element = await driver.findElement(selenium.By.css('h1'));
        const actualText = await h1Element.getText();
        const expectedText = 'Things I should stop procrastinating:';

    })

})
```

8. We use Jest's `expect` and `toBe` matcher to compare the actual text with the expected text, ensuring they match as follows:

```javascript
expect(actualText).toBe(expectedText);
```


**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {
        const driver = await new selenium.Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
        h1Element = await driver.findElement(selenium.By.css('h1'));
        const actualText = await h1Element.getText();
        const expectedText = 'Things I should stop procrastinating:';

        // Using Jest's expect and toBe matcher
        expect(actualText).toBe(expectedText);
    })

})
```

9. await driver.quit();: We use the quit() method to gracefully close the WebDriver instance and the associated browser.

```javascript
await driver.quit()
```
**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');

describe('My Selenium Tests', function () {
  test(' should verify h1 text', async function() {
        const driver = await new selenium.Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
        h1Element = await driver.findElement(selenium.By.css('h1'));
        const actualText = await h1Element.getText();
        const expectedText = 'Things I should stop procrastinating:';

        // Using Jest's expect and toBe matcher
        expect(actualText).toBe(expectedText);
        // We will close our driver session
        await driver.quit()
    })

})
```

10. Run the selenium test.  Only run our selenium-todos.test.js file enter the command:

```bash
npm test -- --testPathPattern=selenium-todos.test.js
```

You should now see that your test has passed.


## Setup and Teardown for Selenium Tests

In order to run Selenium WebDriver tests, it's essential to set up and tear down the WebDriver instance correctly. This ensures that the browser is launched before running the tests and is properly closed afterward. The `beforeAll` and `afterAll` functions provided by Jest are used for these purposes to make our tests DRY.

### Setting up Selenium WebDriver

Before running any Selenium tests, we need to set up the WebDriver instance, which includes configuring the browser to use and opening the web application. Here's how this setup is accomplished step by step:

beforeAll(async function () {: This code block uses beforeAll, a Jest function that runs before all the tests in the test suite. It's where we set up the WebDriver instance.

```javascript
describe('My Selenium Tests', function () {

    let driver;

    beforeAll(async function () {
        driver = await new selenium.Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
    });

})
```

driver = await new selenium.Builder().forBrowser('chrome').build();: We create a new WebDriver instance for the firefox browser using Selenium's Builder class. This is where we specify the browser to be used.

await driver.manage().window().maximize();: We maximize the browser window to ensure that the web application is displayed clearly during testing.

await driver.get('http://localhost:3000/');: We navigate the browser to the URL of our web application (http://localhost:3000/ in this case).

### Tearing Down Selenium WebDriver

After all the tests have been executed, it's crucial to properly close the WebDriver instance to free up resources and terminate the browser. Here's the teardown process:

```javascript
afterAll(async function () {
    // Close the WebDriver instance and the associated browser
    await driver.quit();
})
```

afterAll(async function () {: This code block uses afterAll, a Jest function that runs after all the tests in the test suite. It's where we tear down the WebDriver instance.

await driver.quit();: We use the quit() method to gracefully close the WebDriver instance and the associated browser.

By following this setup and teardown pattern, you ensure that your Selenium tests start with a clean browser environment and properly release resources when they finish.

**Updated Tests**
```javascript
const selenium = require('selenium-webdriver');


describe('My Selenium Tests', function () {

    let driver;

    beforeAll(async function () {
        driver = await new selenium.Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
    });

    afterAll(async function () {
        await driver.quit()
    })

    test.only(' should verify h1 text', async function() {
        // we no longer have to provide our setup code as this will now run beforeAll
        //  test thanks to the beforeAll method making additional test less repetitive meaning DRY
        // const driver = await new selenium.Builder().forBrowser('chrome').build();
        // await driver.manage().window().maximize();
        // await driver.get('http://localhost:3000/');
        const h1Element = await driver.findElement(selenium.By.css('h1'));
        const actualText = await h1Element.getText();
        const expectedText = 'Things I should stop procrastinating:';

        // Using Jest's expect and toBe matcher
        expect(actualText).toBe(expectedText);
    })

})

```

Now run your test again

```bash
npm test -- --testPathPattern=selenium-todos.test.js
```

Test should all pass

## Test Case: Add Item to List

In this test case, we will verify the functionality of adding an item to the to-do list.

1. **Find the Text Input Element:**
   - The test locates the text input element on the web page using its placeholder attribute, which has the value "Type an item here".


**e2e/selenium-todos.test.js**

```javascript

 test('Add Item to List', async () => {
        // Find the text input element
        const inputElement = await driver.findElement(selenium.By.css('[placeholder="Type an item here"]'));

      });
```

2. **Enter Text Character by Character with Delay:**

- To simulate a more user-friendly interaction, the test enters the text "Eat more ice cream" into the input field one character at a time. It adds a delay of 50 milliseconds between each character to visualize the typing effect.

**e2e/selenium-todos.test.js**

```javascript

 test('Add Item to List', async () => {
        // Find the text input element
        const inputElement = await driver.findElement(selenium.By.css('[placeholder="Type an item here"]'));

        // Enter "Eat more ice cream" into the text input one character at a time with a delay so we can see our text
        for (const char of 'Eat more ice cream') {
            await inputElement.sendKeys(char);
            await new Promise(resolve => setTimeout(resolve, 50)); // Add a delay of 50 milliseconds
        }

      });
```

**e2e/selenium-todos.test.js**

3. **Press the Return Key:**

After entering the text, the test presses the Return key on the keyboard to trigger the addition of the item to the list.

```javascript
await inputElement.sendKeys(selenium.Key.RETURN);
```

**e2e/selenium-todos.test.js**
```javascript

 test('Add Item to List', async () => {
        // Find the text input element
        const inputElement = await driver.findElement(selenium.By.css('[placeholder="Type an item here"]'));

        // Enter "Eat more ice cream" into the text input one character at a time with a delay so we can see our text
        for (const char of 'Eat more ice cream') {
            await inputElement.sendKeys(char);
            await new Promise(resolve => setTimeout(resolve, 50)); // Add a delay of 50 milliseconds
        }

        // after we have entered our text now lets go ahead and hit the return key
        await inputElement.sendKeys(selenium.Key.RETURN);
      });
```

Find List Items:

The test selects all list items on the web page by targeting the <li> elements. These elements represent the to-do list items.

```javascript
const listItems = await driver.findElements(selenium.By.css('li'));
```

**e2e/selenium-todos.test.js**

```javascript

 test('Add Item to List', async () => {
        // Find the text input element
        const inputElement = await driver.findElement(selenium.By.css('[placeholder="Type an item here"]'));

        // Enter "Eat more ice cream" into the text input one character at a time with a delay so we can see our text
        for (const char of 'Eat more ice cream') {
            await inputElement.sendKeys(char);
            await new Promise(resolve => setTimeout(resolve, 50)); // Add a delay of 50 milliseconds
        }

        // after we have entered our text now lets go ahead and hit the return key
        await inputElement.sendKeys(selenium.Key.RETURN);

        //  entering input without a delay
        // await inputElement.sendKeys('Eat more ice cream', selenium.Key.RETURN);

        // lets select our list items by targeting li css element
        const listItems = await driver.findElements(selenium.By.css('li'));
      });
```

Get the Text of the Last Item:

The test retrieves the text of the last item in the list. This item should contain the text "Eat more ice cream" if the addition was successful.

```javascript
expect(lastItemText).toBe('Eat more ice cream');
```

**e2e/selenium-todos.test.js**

```javascript

 test('Add Item to List', async () => {
        // Find the text input element
        const inputElement = await driver.findElement(selenium.By.css('[placeholder="Type an item here"]'));

        // Enter "Eat more ice cream" into the text input one character at a time with a delay so we can see our text
        for (const char of 'Eat more ice cream') {
            await inputElement.sendKeys(char);
            await new Promise(resolve => setTimeout(resolve, 50)); // Add a delay of 50 milliseconds
        }

        // after we have entered our text now lets go ahead and hit the return key
        await inputElement.sendKeys(selenium.Key.RETURN);

        //  without a delay
        // await inputElement.sendKeys('Eat more ice cream', selenium.Key.RETURN);

        // lets select our list items by targeting li css element
        const listItems = await driver.findElements(selenium.By.css('li'));

        // Get the text of the last item
         const lastItemText = await listItems[listItems.length - 1].getText();

         // Verify that the last item has the text "Eat more ice cream"
         expect(lastItemText).toBe('Eat more ice cream');
      });
```

***Note using [test.only()](https://jestjs.io/docs/api#testonlyname-fn-timeout)***

**e2e/selenium-todos.test.js**

```javascript
const selenium = require('selenium-webdriver');


describe('My Selenium Tests', function () {

    let driver;

    beforeAll(async function () {
        driver = await new selenium.Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
    });

    afterAll(async function () {
        await driver.quit()
    })

    test(' should verify h1 text', async function() {
        // we no longer have to provide our setup code as this will now run beforeAll
        //  test thanks to the beforeAll method
        // const driver = await new selenium.Builder().forBrowser('chrome').build();
        // await driver.manage().window().maximize();
        // await driver.get('http://localhost:3000/');
        const h1Element = await driver.findElement(selenium.By.css('h1'));
        const actualText = await h1Element.getText();
        const expectedText = 'Things I should stop procrastinating:';

        // Using Jest's expect and toBe matcher
        expect(actualText).toBe(expectedText);
    })
//  using test.only will make sure only that particular test will run
    test.only('Add Item to List', async () => {
        // Find the text input element
        const inputElement = await driver.findElement(selenium.By.css('[placeholder="Type an item here"]'));

        // Enter "Eat more ice cream" into the text input one character at a time with a delay so we can see our text
        for (const char of 'Eat more ice cream') {
            await inputElement.sendKeys(char);
            await new Promise(resolve => setTimeout(resolve, 50)); // Add a delay of 50 milliseconds
        }

        // after we have entered our text now lets go ahead and hit the return key
        await inputElement.sendKeys(selenium.Key.RETURN);

        //  without a delay
        // await inputElement.sendKeys('Eat more ice cream', selenium.Key.RETURN);

        // lets select our list items by targeting li css element
        const listItems = await driver.findElements(selenium.By.css('li'));

        // Get the text of the last item
         const lastItemText = await listItems[listItems.length - 1].getText();

         // Verify that the last item has the text "Eat more ice cream"
         expect(lastItemText).toBe('Eat more ice cream');
      });
})
```

## Test Case: Clicking on "Finished the list!" will delete all elements in the list

In this test case, we will verify the functionality of clicking the "Finished the list!" button, which should remove all items from the to-do list.

Locate and Click the "Finished the List!" Button:

The test locates the "Finished the list!" button on the web page using an XPath expression and clicks it to initiate the list clearing process.

```javascript
const finishedButton = await driver.findElement(selenium.By.xpath('//button[normalize-space()="Finished the list!"]'));
await finishedButton.click();
```
**e2e/selenium-todos.test.js**
```javascript
 test('Clicking on "Finished the list!" will delete all elements in the list', async () => {

        // Locate and click the "Finished the list!" button
        const finishedButton = await driver.findElement(selenium.By.xpath('//button[normalize-space()="Finished the list!"]'));
        await finishedButton.click();
    });
```

Wait for List Update:

To ensure that the list has been updated and all elements have been deleted, the test waits for a brief moment (you can use a wait if necessary) to allow the list to update.

```javascript
await driver.sleep(1000); // Wait for 1 second
```

**e2e/selenium-todos.test.js**
```javascript
 test('Clicking on "Finished the list!" will delete all elements in the list', async () => {

        // Locate and click the "Finished the list!" button
        const finishedButton = await driver.findElement(selenium.By.xpath('//button[normalize-space()="Finished the list!"]'));
        await finishedButton.click();

        // Wait for a brief moment to allow the list to update (you can use a wait if necessary)
        await driver.sleep(1000);

        // Verify that all elements in the list are deleted
        const listItems = await driver.findElements(selenium.By.css('li'));
        expect(listItems.length).toBe(0);
    });
```

Verify that All Elements in the List are Deleted:

The test confirms the success of the operation by checking that there are no list items (<li>) remaining in the list.

```javascript
const listItems = await driver.findElements(selenium.By.css('li'));
expect(listItems.length).toBe(0);
```

**e2e/selenium-todos.test.js**
```javascript
 test('Clicking on "Finished the list!" will delete all elements in the list', async () => {

        // Locate and click the "Finished the list!" button
        const finishedButton = await driver.findElement(selenium.By.xpath('//button[normalize-space()="Finished the list!"]'));
        await finishedButton.click();

        // Wait for a brief moment to allow the list to update (you can use a wait if necessary)
        await driver.sleep(1000);

        // Verify that all elements in the list are deleted
        const listItems = await driver.findElements(selenium.By.css('li'));
        expect(listItems.length).toBe(0);
    });
```

Now run your test again
```javascript
npm test -- --testPathPattern=selenium-todos.test.js
```
all test should now have pased


final:

**e2e/selenium-todos.test.js**
```javascript
const selenium = require('selenium-webdriver');


describe('My Selenium Tests', function () {

    let driver;

    beforeAll(async function () {
        driver = await new selenium.Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3000/');
    });

    afterAll(async function () {
        await driver.quit()
    })

    test(' should verify h1 text', async function() {
        // we no longer have to provide our setup code as this will now run beforeAll
        //  test thanks to the beforeAll method
        // const driver = await new selenium.Builder().forBrowser('chrome').build();
        // await driver.manage().window().maximize();
        // await driver.get('http://localhost:3000/');
        const h1Element = await driver.findElement(selenium.By.css('h1'));
        const actualText = await h1Element.getText();
        const expectedText = 'Things I should stop procrastinating:';

        // Using Jest's expect and toBe matcher
        expect(actualText).toBe(expectedText);
    })

    test('Add Item to List', async () => {
        // Find the text input element
        const inputElement = await driver.findElement(selenium.By.css('[placeholder="Type an item here"]'));

        // Enter "Eat more ice cream" into the text input one character at a time with a delay so we can see our text
        for (const char of 'Eat more ice cream') {
            await inputElement.sendKeys(char);
            await new Promise(resolve => setTimeout(resolve, 50)); // Add a delay of 50 milliseconds
        }

        // after we have entered our text now lets go ahead and hit the return key
        await inputElement.sendKeys(selenium.Key.RETURN);

        //  without a delay
        // await inputElement.sendKeys('Eat more ice cream', selenium.Key.RETURN);

        // lets select our list items by targeting li css element
        const listItems = await driver.findElements(selenium.By.css('li'));

        // Get the text of the last item
         const lastItemText = await listItems[listItems.length - 1].getText();

         // Verify that the last item has the text "Eat more ice cream"
         expect(lastItemText).toBe('Eat more ice cream');
      });

      test('Clicking on "Finished the list!" will delete all elements in the list', async () => {
        // Navigate to the application
        await driver.get('http://localhost:3000/');

        // Locate and click the "Finished the list!" button
        const finishedButton = await driver.findElement(selenium.By.xpath('//button[normalize-space()="Finished the list!"]'));
        await finishedButton.click();

        // Wait for a brief moment to allow the list to update (you can use a wait if necessary)
        await driver.sleep(1000);

        // Verify that all elements in the list are deleted
        const listItems = await driver.findElements(selenium.By.css('li'));
        expect(listItems.length).toBe(0);
    });
})
