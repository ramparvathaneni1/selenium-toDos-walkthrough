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

Now install the `selenium-webdriver` package for this project, so we can use it in our tests using the command:

```bash
npm install selenium-webdriver
```
