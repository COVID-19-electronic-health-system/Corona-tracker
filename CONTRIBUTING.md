# Contributing

## Quick Note

When contributing to this repository, please first discuss the change you wish to make via [Issues](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues),
[Kanban Board](https://github.com/COVID-19-electronic-health-system/Corona-tracker/projects/1), or [Discord](https://discord.gg/pPERUuv) before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Background

❤️ By the community, for the community. ❤️

We are building an open source CoronaTracker app to help educate the public and reduce the community transmissions.

## Values

Social good through technology. We value initiative, collaboration and experimentation. We say what we mean, and do what we say.

We are a welcoming, warm and collaborative group of people from all over the world! Here you can experiment, take chances. Failure is ok. We are here to help. We encourage developers to learn new things and best practices while collaborating on a project that is scaling to help mankind against COVID-19.

## Code Of Conduct

We are creating tools by the community for the community. Please follow the [code of conduct](./CODE_OF_CONDUCT.md) in all your interactions with the project.

## How Can I Contribute?
Jump on our [Discord](https://discord.gg/pPERUuv) and choose the team that interests you the most. Reach out to the team lead and introduce yourself! We are happy to talk to you.

## What should I know before I get started?

Coming soon.. For now, feel free to jump on the [Discord](https://discord.gg/pPERUuv) and ask @Anthony A.

## Setup

### Local development

#### Getting the repo

**Our community project works by accepting pull requests, instead of having developers contribute directly to master.**

It will save headaches in the long run and allow us to scale. After the first time it becomes second nature. Plus, we get the added benifits of code reviews, so we all can become better software developers together. This is HIGHLY important once teams start to grow for effective collaboration.

As our CTO/technical lead @somemoosery says "As software engineers we have a responsibility to deliver good code AND a clean git history".

Let's scale while learning to build some cool stuff together.  🚀

👀 To get a copy of our repo:
1. FORK [our repo.](https://github.com/COVID-19-electronic-health-system/Corona-tracker).
See [how to fork a repo in Github.](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)

1. In your terminal Run `git clone <path>`, using the `<path>` of your forked repo.

⚠️ **Please do not clone directly from our main repository**. This will point your local repo's [origin](https://www.git-tower.com/learn/git/glossary/origin) to our main repo, to which you will not have write access. Doing so will eventually cause an error when attempting to push code.

#### Configuing Your Git Repo to Contribute

We contribute from our forked repo, but need updates from the main repo. How do we solve this?

Simple! We can learn how to set the `upstream` and do the `fetch` and `merge` with [this article.](https://www.atlassian.com/git/tutorials/git-forks-and-upstreams)

What is an [upstream]()

Quick summary:

1. Check your repo's origin (where your forked code is located)
   `git remote -v`
2. Add an upstream  
   `git remote add upstream git@github.com:COVID-19-electronic-health-system/Corona-tracker.git`  
3. Check remote again  
   `git remote -v`  

Now you can collect the latest changes of the upstream repository with fetch!

To get updates, do this every time:  
`git fetch upstream`

👀 Note: Keep your local master branch as a close mirror of the upstream master. Execute any work in a feature branches, as they might later become pull requests.

4. Now merge or rebase with the upstream master (aka the main repo you are contributing to)  
   `git checkout master`  
   `git merge upstream/master`  

Boom! Now you are all set!

#### Front-End Setup
##### Using MacOS?
Skip ahead to the next section.

##### Using Windows?  
Terminal related installation instructions are usually written for BASH-based command languages.

[BASH](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) is a [command language](https://en.wikipedia.org/wiki/Command_language) that is often used by developers to configure, install and work with software on [Unix-like](https://en.wikipedia.org/wiki/Unix-like) environments. The alternative is to user [PowerShell](https://www.brycemcdonald.net/powershell/automation/exchange/2019/04/10/PowerShell-vs-Bash.html), but information written with it is harder to find. 

To keep things consistent (and life easier), stick to BASH.

Luckily, Windows has Visual Studio Code, which has a built in terminal that can run BASH. Try using [Visual Studio Code](https://code.visualstudio.com/) as your code editor. It has a built-in console which comes with BASH.

**To install:**  
Download [Visual Studio Code](https://code.visualstudio.com/), also known as VSCode.

**Set up BASH on Windows VSCode**
See [how to pick BASH in the integreated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal#_windows).
1) Opening up terminal in VSCode.  
2) Click on bash.  
3) Restart VSCODE.  

Boom! You are done!

👀☝️ Note: The next section will apply to all Operating Systems (MacOS, Linux-based, Windows).

#### Front End Setup
**Yarn**  
NOTE: We are using [Yarn](https://yarnpkg.com/) instead of [NPM](https://en.wikipedia.org/wiki/Npm_(software)) as our package manager. 

**Why Yarn?**  
Its faster than NPM

**ONLY USE YARN**  
👀⚠️ Please make sure that you **ONLY** use Yarn. Using NPM in combination with Yarn **will break the code** when the [continuous integration](https://codeship.com/continuous-integration-essentials) tests run.

This means that your Pull Request will not be merged into the code base. Avoid the errors and save the time. that will be tricky to debug.

See [great this example](https://github.com/COVID-19-electronic-health-system/Corona-tracker/pull/258).

**To Install**:  

1. Install Yarn 1.x on your machine globally. Go to [Yarn's website](https://classic.yarnpkg.com/en/docs/install#mac-stable) and pick which method you'd like to use.

Run `yarn --version`  
You should get something like `1.22`.

**Installing /client packages**  
While in root:  
`cd /client`  

Install all the packages:  
`yarn install`

**Installing /server packages**
We are using Blockstack, a technology that allows users to decentralize their data by allowing them to control it. As such, alot of the servers code can also be considered front end code.

While in root:  
`cd /server`  

Install all the packages:  
`yarn install`

#### Back-End Setup (Currently Only Documentation for OSX)
**WE SUGGEST RUNNING ON QA ENVRIONMENT**

##### What is a QA Envrionment ?

##### QA Envrionment Setup
To run locally, you'll need to have MongoDB installed locally. Follow [this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) guide if you don't have it already

- Once you have MongoDB installed, start MongoDB, create a new database and create a user with admin privileges:
  - `brew services start mongodb` - start MongoDB
  - `ps aux | grep -v grep | grep mongod` - ensure MongoDB is running
  - `mongo` - open up MongoDB console
  - `use coronatracker` - switch to a new local database, coronatracker
  - `db.createUser({user: "admin", pwd:"foobar1",roles: ["readWrite","dbAdmin"]});` - create a new admin user for this database

You'll also need `radiks-server`, which you can install simply with  

**yarn**
`yarn global add radiks-server`

- Create a `MONGODB_URI` environment variable on the same machine you're running `radiks-server`
- `export MONGODB_URI="mongodb://admin:foobar1@localhost:27017/test1"` - `admin`, `foobar1`, `test1` are the username/pass/db from the admin user you created when setting up MongoDB

##### Starting up QA Environment

1. Ensure MongoDB is running (see Prerequisites).
2. Open a new tab on your console.
3. `radiks-server` - start the local radiks server
4. `Yarn run start` - run the application locally

### QA development

#### Installation and run steps

1. Fork this repo `https://github.com/COVID-19-electronic-health-system/Corona-tracker`
2. `cd Corona-tracker/client`
3. `yarn install`
4. Create a new file, `.env.development`
5. On the Discord server, navigate to the #welcome channel, and click the pin icon on the top right of the window. Copy the `REACT_APP_QA_URL` code from the pinned message from Carter Klein.
6. In `.env.development`, write and save `REACT_APP_QA_URL: <THE-URL-CODE>`
7. `yarn start` - run the application locally

### BEFORE YOU MAKE CHANGES TO YOUR FORKED CODE VIA BRANCH OR MASTER

Make sure stay updated with the master branch of the main repo, as multiple people are contributing code and to avoid merge conflicts for the admins.
Unsure of how to stay updated? Paste this in your terminal:

`git remote add upstream https://github.com/COVID-19-electronic-health-system/Corona-tracker`

And now when you `git remote -v`, you should see this if everything set correctly.

```
> origin https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
> upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
> upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```

Anytime you want to make alterations to your forked code, now just make sure to:
`git fetch upstream`
`git merge upstream/master`
And your current branch is up to date with the master branch of the main repo! Use this link from Github if you need more guidance [Setting up an upstream repo](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)

### Pull Requests

### Pull request process

The process described here has several goals:

- Maintain CoronaTracker's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible CoronaTracker
- Enable a sustainable system for CoronaTracker's maintainers to review contributions

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.


### Making Pull Requests 
#### Proper Git Hygiene

Add Carter Issue here

#### Git Workflow
We will use the Forking workflow as a way to organize our Git history
See [Git workflow overview](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)

See [how to stay synched with Git](https://www.atlassian.com/git/tutorials/syncing)

More to come describing this.

#### Contributions to our codebase?
See the how to create a [Pull Request](###How-to-create-a-Pull-Request?)

#### How to become a maintainers
Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](/.github/pull_request_template.md)
2. Follow the style guides - COMING SOON
3. After you submit your pull request, verify that all Travis CI steps are passing <details><summary>What if the Travis CI are failing?</summary>If a Travis CI step is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the Travis CI steps for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

### Merging pull requests

Organization members can merge a Pull Request. Currently, we require a minumum of other developer to review the code. As the project grows, we anticipate that this will grow to two developers at minimum. We will update this document when the time comes.

Ideally, the team lead or back up team lead should lookg over your code, and give any reviews.

Once you open a pull request make sure that it passes all continous integration tests. If they do not, please attempt to fix them before asking for a review. If you do need help, mention that in the Pull Request comments and in the Discord channel for your team.

### Style Guides
Why? Because we want all our code to merge well

#### Front end style guide

📝 Use Material-UI to build and style components.  

📝 When styling, use Material-UI styling APIs.

🛑 Don’t use separate CSS file or inline-style i.e. “style={{width:’100px’}}"

📝 We already included ThemeProvider and CssBaseline APIs. Please use it to advantage of full Material-UI options and not worry about styling every little aspect.  

📖 Material-UI has great documentation. There are a lot of examples and answers to many questions you may face from the community. You also can ask for help via Discord in the #front-end chat.

#### Design style guide

Coming soon

See #ux-ui in discord chat.

#### Back end style guide

Coming soon

See #backend in discord chat.

#### Data science / analytics style guide

Coming soon

See #analytics in discord chat.


## Reporting Bugs

This section guides you through submitting a bug report for CoronaTracker. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports (if applicable).

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/atom/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, **open a new issue** and include a link to the original issue in the body of your new one.

### Before Submitting A Bug Report

- **Check the [README](./README.md)** for a list of common questions, abstracts, concerns, etc.
- **Perform a [cursory search](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Provide the following information by filling in [the template](.githubISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started CoronaTracker, e.g. which command exactly you used in the terminal, or how you started Atom otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut, and if so which one?
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can use [licecap](https://www.cockos.com/licecap/) or [gyazo](https://gyazo.com/en) to record GIFs on macOS and Windows, and [silentcast](https://github.com/colinkeenan/silentcast) or [byzanz](https://manpages.ubuntu.com/manpages/bionic/en/man1/byzanz-record.1.html) on Linux.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

- **Did the problem start happening recently** (e.g. after updating to a new version of CoronaTracke / pulling from `master`) or was this always a problem?
- If the problem started happening recently, **can you reproduce the problem in an older version / old commit of CoronaTracker?** What's the most recent version in which the problem doesn't happen?
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

- **What's the name and version of the OS you're using**?
- **Which keyboard layout are you using?** Are you using a US layout or some other layout?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for CoronaTracker, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please search for similar keywords as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of CoronaTracker which the suggestion is related to. You can use [licecap](https://www.cockos.com/licecap/) or [gyazo](https://gyazo.com/en) to record GIFs on macOS and Windows, and [silentcast](https://github.com/colinkeenan/silentcast) or [byzanz](https://manpages.ubuntu.com/manpages/bionic/en/man1/byzanz-record.1.html) on Linux.
- **Explain why this enhancement would be useful** to most CoronaTracker users.
- **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to Atom? You can start by looking through these `good first issue` and `help-wanted` issues:

## Common Commands

### Git

#### merge

...coming soon

#### rebase
... more coming soon
[Overview of `rebase`.](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

[How to use `rebase`.](https://help.github.com/en/github/using-git/using-git-rebase-on-the-command-line)

[See Beginner's guide to rebasing and squashing.](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing) 

### When to use merge vs rebase

#### fetch

...coming soon

### remote

...coming soon

### Yarn

See the full list of commands [here](https://classic.yarnpkg.com/en/docs/cli/).  

`yarn install`  
Installs all node modules  
Similar to `npm i`  
[See more](https://classic.yarnpkg.com/en/docs/cli/install)

`yarn add`  
Installs a package and any packages that it depends on.  
Similar to `npm install <package-name>`  
[See more](https://classic.yarnpkg.com/en/docs/cli/add)

`yarn remove`  
removes an unused package from your current package.json  
Similar to `npm uninstall <package-name>`  
[See more](https://classic.yarnpkg.com/en/docs/cli/remove)

#### Other commands

Commands you probably won't use, but are good to know anyway.

`yarn init`  
initializes the development of a package.  
Similar to `npm init`  
[See more](https://classic.yarnpkg.com/en/docs/cli/init)

`yarn upgrade`  
Upgrades packages to their latest version based on the specified range  
Similar to `npm update <package-name>@<verision>`  
[See more](https://classic.yarnpkg.com/en/docs/cli/upgrade)
