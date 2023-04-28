# 	Develop With AI Powered Code Suggestions Using GitHub Copilot and VS Code

<!--step0

GitHub Copilot can help you code by offering autocomplete-style suggestions. You can learn how GitHub Copilot works, and what to consider while using GitHub Copilot. GitHub Copilot analyzes the context in the file you are editing, as well as related files, and offers suggestions from within your text editor. GitHub Copilot is powered by OpenAI Codex, a new AI system created by OpenAI.


- **Who this is for**: Developers, DevOps Engineers, Software development managers, Testers
- **What you'll learn**: How to install Copilot into a Codespace, accept suggestions from code, accept suggestions from comments
- **What you'll build**: Javascript files that will have code generated by Copilot AI for code and comment suggestions
- **Prerequisites**: To use GitHub Copilot you must have an active GitHub Copilot subscription. Sign up for 60 days free [Copilot](https://github.com/settings/copilot)
- **Timing**: This course is four steps long and can be completed in under an hour

<summary><h2> How to start this course!</h2></summary>
 
1. Above these instructions, click **Use this template**.
2. From the dropdown right-click **Create a new repository** and open the link in a new tab.
![Screen Shot 2023-03-07 at 9 28 54 AM](https://user-images.githubusercontent.com/26442605/223501605-e67051f7-50af-4ae0-a18f-6f733a8b6c62.png)
3. In the new tab, follow the prompts to create a new repository.
   - For owner, choose your personal account or an organization to host the repository.
   - We recommend creating a public repository—private repositories will use [Actions minutes](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
   ![Create a new repository](https://user-images.githubusercontent.com/1221423/169618722-406dc508-add4-4074-83f0-c7a7ad87f6f3.png)
4. After your new repository is created, wait about 20 seconds, then refresh the page. Follow the step-by-step instructions in the new repository's README.

endstep0-->

<details id=1>
<summary><h2>Step 1: Leverage Codespaces with VS Code for Copilot</h2></summary>

_Welcome to "	Develop With AI Powered Code Suggestions Using GitHub Copilot and VS Code"! :wave:_
 
GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly. GitHub Copilot is powered by OpenAI Codex, a generative pretrained language model created by OpenAI. 
 
**Copilot works with many code editors including VS Code, Visual Studio, JetBrains IDE and Neovim.**
 
Additionally GitHub Copilot is trained on all languages that appear in public repositories. For each language, the quality of suggestions you receive may depend on the volume and diversity of training data for that language.

Using Copilot inside a Codespace shows just how easy it is to get up and running with GitHub's suite of [Collaborative Coding](https://github.com/features#features-collaboration) tools.

 > **Note**
 > This skills exercise will focus on leveraging GitHub Codespace. It is recommended that you complete the GitHub skill, [Codespaces](https://github.com/skills/code-with-codespaces) before moving forward with this exercise.

### :keyboard: Activity: Enable Copilot inside a Codespace

**We recommend opening another browser tab to work through the following activities so you can keep these instructions open for reference.**
 
Before you open up a codespace on a repository, you can create a development container and define specific extenstions or configurations that will be used or installed in your codespace. Let's create this development container and add copilot to the list of extensions. 

1. Navigating back to your **Code** tab of your repository, click the **Add file** drop-down button, and then click `Create new file`.
1. Type or paste the following in the empty text field prompt to name your file.
   ```
   .devcontainer/devcontainer.json
   ```
1. In the body of the new **.devcontainer/devcontainer.json** file, add the following content:
   ```
   {
       // Name this configuration
       "name": "Codespace for Skills!",
       "customizations": {
           "vscode": {
               "extensions": [
                   "GitHub.copilot"
               ]
           }
       }
   }
   ```
1. Click **Commit changes** and then select **Commit changes directly to the `main` branch**.
1. Navigate back to the home page of your repository by clicking the **Code** tab located at the top left of the screen.
1. Click the **Code** button located in the middle of the page.
1. Click the **Codespaces** tab on the box that pops up.
1. Click the **Create codespace on main** button.

   **Wait about 2 minutes for the codespace to spin itself up.**

1. Verify your codespace is running. The browser should contain a VS Code web-based editor and a terminal should be present such as the below:
![Screen Shot 2023-03-09 at 9 09 07 AM](https://user-images.githubusercontent.com/26442605/224102962-d0222578-3f10-4566-856d-8d59f28fcf2e.png)
1. The `copilot` extension should show up in the VS Code extension list. Click the extensions sidebar tab. You should see the following:
![Screen Shot 2023-03-09 at 9 04 13 AM](https://user-images.githubusercontent.com/26442605/224102514-7d6d2f51-f435-401d-a529-7bae3ae3e511.png)
 
</details>

<details id=2 open>
<summary><h2>Step 2: Seeing AI code suggestions in a Javascript file!</h2></summary>

_Nice work! :tada: You created a Codespace using a devcontainer file that installed Copilot!_

GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. The following samples are in JavaScript, but other languages will work similarly.

Let's try this out utilizing Javascript for Copilot.
 
### :keyboard: Activity: Add a Javascript file and start writing code

1. From inside the codespace in the VS Code explorer window, create a new file. 
 
> **Note**:
> If you closed the Codespace from above, please open it back up or create a new Codespace.
 
2. Name the file `skills.js`
3. Verify your new file looks like:
 ![Screen Shot 2023-03-09 at 9 21 34 AM](https://user-images.githubusercontent.com/26442605/224105906-d1beb531-b747-4c7a-85ba-a12526488422.png)
4. In the `skills.js` file, type the following function header.
 
   ```
   function calculateNumbers(var1, var2)
   ```
   GitHub Copilot will automatically suggest an entire function body in grayed text. Below is an example of what you'll most likely see, but the exact suggestion may vary.
 ![Screen Shot 2023-04-27 at 10 23 06 AM](https://user-images.githubusercontent.com/26442605/234941079-b4bf3e9d-fc70-4b20-b74c-0ee753ba344e.png)

 
5. Press `Tab` to accept the suggestion.
 
### :keyboard: Activity: Push code to your repository from the codespace

1. Use the VS Code terminal to add the `skills.js` file to the repository:
 
   ```
   git add skills.js
   ```

2. Next from the VS code terminal stage and commit the changes to the repository:
 
   ```
   git commit -a -m "Copilot first commit"
   ```
 
3. Finally from the VS code terminal push to code to the repository:
 
   ```
   git push
   ```
 
**Wait about 60 seconds then refresh your repository landing page for the next step.**
 
</details>

<details id=3>
<summary><h2>Step 3: View the GitHub Copilot tab with multiple suggestions</h2></summary>

_Nice work! You just used AI code suggestions within a Javascript file by using GitHub Copilot :sparkles:_
 
Keep in mind that as you continue to use copilot, you may not want some of the suggestions GitHub Copilot offers. GitHub Copilot will show you multiple suggestions in a new tab.

### :keyboard: Activity: Pull the latest code to the Codespace repo.

> **Note**
 > Pull MUST be done prior to the next activity.
 
1. Use the VS Code terminal to pull the latest code:

   ```
   git pull
   ```
   
### :keyboard: Activity: Add another Javascript method and view all suggestions

1. From inside the codespace in the VS Code explorer window, create a new file. Note: If you closed the Codespace from above please open it back up or create a new Codespace.
2. Name the file `member.js`
3. In the `member.js` file, type the following function header.
   ```
   function skillsMember()
   ```
4. Stop typing and view the Copilot suggestion by hovering over the red squiggly and select the `...`
5. Click `Open Completions Panel`. Copilot will synthesize around 10 different code suggestions. You should see something like this:
 ![Screen Shot 2023-04-27 at 10 06 55 AM](https://user-images.githubusercontent.com/26442605/234937592-d196bd5e-8ac2-4d9a-87f4-94e8a9b6a417.png)
6. Find a solution you like and click `Accept Solution`. 
7. Your `member.js` file will be updated with your solution.
 
### :keyboard: Activity: Push code to your repository from the codespace

1. Use the VS Code terminal to add the `member.js` file to the repository:
 
   ```
   git add member.js
   ```

2. Next from the VS code terminal stage and commit the changes to the repository:
 
   ```
   git commit -a -m "Copilot second commit"
   ```
 
3. Finally from the VS code terminal push to code to the repository:
 
   ```
   git push
   ```
    
 > **Note**
 > We are using -f to force to the push to the repository.

**Wait about 60 seconds then refresh your repository landing page for the next step.**

</details>

<details id=4>
<summary><h2>Step 4: Using comments to generate code with Copilot</h2></summary>

_Nicely done utilizing the Copilot tab!_ :partying_face:

You now have leveraged the Copilot quick tab auto-suggest as well as the Copilot hub to accept AI generated suggestions. 

Now lets see how you can leverage comments to generate Copilot suggestions!

### :keyboard: Activity: Pull the latest code to the Codespace repo.

> **Note**
 > Pull MUST be done prior to the next activity.
 
1. Use the VS Code terminal to pull the latest code:

   ```
   git pull
   ```
   
### :keyboard: Activity: Generate Copilot suggested code from comments.

1. From inside the codespace in the VS Code explorer window, create a new file. (If you closed the Codespace from above, please open it back up or create a new Codespace.)
2. Name the file `comments.js`.
3. Type the following comment into the file:
   ```
   // Create web server
   ```
4. Press `enter` to go to a new line.
5. Copilot will suggest a code block.
6. Hover over the red squggly and select the `...`
7. Click `Open Completions Panel`. Copilot will synthesise around 10 different code suggestions. You should see somethig like this:
 ![Screen Shot 2023-04-25 at 3 59 42 PM](https://user-images.githubusercontent.com/26442605/234425509-74ea96e0-bbd6-417b-84c5-73546ac7b2cd.png)
8. Find a solution you like and click `Accept Solution`. 
7. Your `comments.js` file will be updated with your solution.
 
### :keyboard: Activity: Push code to your repository from the codespace

1. Use the VS Code terminal to add the `comments.js` file to the repository:
 
   ```
   git add comments.js
   ```

2. Next from the VS code terminal stage and commit the changes to the repository:
 
   ```
   git commit -a -m "Copilot third commit"
   ```
 
3. Finally from the VS code terminal push to code to the repository:
 
   ```
   git push 
   ```
    
 > **Note**
 > We are using -f to force to the push to the repository.

**Wait about 60 seconds then refresh your repository landing page for the next step.**

</details>

<details id=X>
<summary><h2>Finish</h2></summary>

_Congratulations friend, you've completed this course!_

<img src="https://octodex.github.com/images/welcometocat.png" alt=celebrate width=300 align=right>

Here's a recap of all the tasks you completed:

* Set up Copilot inside a Codespace.
* Use Copilot to accept suggested code.
* Use Copilot's hub for alternate suggestions.
* Leverage comments to have Copilot auto-suggest code.

### Additional learning and resources
 
- [Copilot for Individuals](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)
- [Copilot for Business](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-for-business)
- [Getting started with Copilot](https://docs.github.com/en/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)
- [Configure Copilot settings](https://docs.github.com/en/copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom)


### What's next?

- [We'd love to hear what you thought of this course](https://github.com/skills/.github/discussions).
- [Learn another GitHub skill](https://github.com/skills).
- [Read the Get started with GitHub docs](https://docs.github.com/en/get-started).
- To find projects to contribute to, check out [GitHub Explore](https://github.com/explore).

</details>

---

Get help: [TBD-support](TBD-support-link) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2022 TBD-copyright-holder &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [CC-BY-4.0 License](https://creativecommons.org/licenses/by/4.0/legalcode)
