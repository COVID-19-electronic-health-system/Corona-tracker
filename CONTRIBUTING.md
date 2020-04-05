# Contributing to CoronaTracker

# Table of Contents

<!-- TOC -->

- [Contributing to CoronaTracker](#contributing-to-coronatracker)
- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
  - [Quick Note](#quick-note)
  - [How Can I Contribute?](#how-can-i-contribute)
  - [Background](#background)
  - [Values](#values)
  - [Townhalls](#townhalls)
- [Getting Started](#getting-started)
  - [Getting the Repo](#getting-the-repo)
    - [Terminology](#terminology)
    - [Forking the Repo](#forking-the-repo)
    - [Updating a Forked Repo](#updating-a-forked-repo)
    - [Helpful Resources](#helpful-resources)
  - [Front End Configuration](#front-end-configuration)
    - [Using Windows?](#using-windows)
    - [Configure Yarn](#configure-yarn)
      - [Installing Yarn](#installing-yarn)
  - [Back-End Configuration](#back-end-configuration)
    - [What is a QA Envrionment?](#what-is-a-qa-envrionment)
    - [QA Envrionment Setup](#qa-envrionment-setup)
    - [Starting up QA Environment](#starting-up-qa-environment)
    - [Developing in the QA Environment](#developing-in-the-qa-environment)
- [Style Guide](#style-guide)
  - [Front End Style Guide](#front-end-style-guide)
  - [Design Style Guide](#design-style-guide)
  - [Back End Style Guide](#back-end-style-guide)
  - [Data Science / Analytics Style Guide](#data-science--analytics-style-guide)
  - [Git Style Guide](#git-style-guide)
    - [Git branch naming](#git-branch-naming)
    - [Git message styling](#git-message-styling)
- [Contributing Code](#contributing-code)
    - [Goals](#goals)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Git Contribution Workflow](#git-contribution-workflow)
    - [Submitting Code](#submitting-code)
    - [Editing Code After Reviewer Comments](#editing-code-after-reviewer-comments)
  - [Additional resources](#additional-resources)
  - [Contributions](#contributions)
  - [Merging pull requests](#merging-pull-requests)
- [Bug Reports](#bug-reports)
  - [Reporting Bugs](#reporting-bugs)
    - [Before Submitting A Bug Report](#before-submitting-a-bug-report)
    - [How Do I Submit A (Good) Bug Report?](#how-do-i-submit-a-good-bug-report)
- [Suggesting Enhancements](#suggesting-enhancements)
  - [How Do I Submit A (Good) Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)
- [Common Commands](#common-commands)
  - [Git](#git)
    - [Information](#information)
    - [Making Changes](#making-changes)
    - [Committing Changes](#committing-changes)
    - [Modify last commit message](#modify-last-commit-message)
    - [Updating the Repo](#updating-the-repo)
    - [Rebasing](#rebasing)
    - [Cleaning Up](#cleaning-up)
    - [Resources](#resources)
  - [Yarn](#yarn)
  - [Other commands](#other-commands)

<!-- /TOC -->

# About the Project 

## Quick Note

When contributing to this repository, please first discuss the change you wish to make via [Issues](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues),
[Kanban Board](https://github.com/COVID-19-electronic-health-system/Corona-tracker/projects/1), or [Discord](https://discord.gg/pPERUuv) before making a change.

We are creating tools by the community for the community. Please follow the [code of conduct](./CODE_OF_CONDUCT.md) in all your interactions with the project.

## How Can I Contribute?

Jump on our [Discord](https://discord.gg/pPERUuv) and choose the team that interests you the most. Reach out to the team lead and introduce yourself! We are happy to talk to you.

See here to jump to our [style guides](#style-guide) and [github workflow](#git-contribution-workflow).

## Background

❤️ By the community, for the community. ❤️

We are building an open source CoronaTracker app to help educate the public and reduce the community transmissions.

## Values

Social good through technology. We value initiative, collaboration and experimentation. We say what we mean, and do what we say.

We are a welcoming, warm and collaborative group of people from all over the world! Here you can experiment, take chances. Failure is ok. We are here to help. We encourage developers to learn new things and best practices while collaborating on a project that is scaling to help mankind against COVID-19.

## Townhalls

We also hold weekly townhalls Saturdays from 12:00pm EST to 12:30 EST. Join discord for more details.

The typical agenda is:  

1) Team leads will give an update of the project.
2) Discuss roadmap.
3) Discuss deadline.
4) Explain things that need to be done to hit current goal.

# Getting Started

## Getting the Repo

**Our community project works by accepting pull requests, instead of having developers contribute directly to master.**

It will save headaches in the long run and allow us to scale. After the first time it becomes second nature. Plus, we get the added benifits of code reviews, so we all can become better software developers together. This is HIGHLY important once teams start to grow for effective collaboration.

As our CTO/technical lead @somemoosery says "As software engineers we have a responsibility to deliver good code AND a clean git history".

Let's scale while learning to build some cool stuff together. 🚀

### Terminology

The following terms are standards used when working with a repository.

- __upstream:__ the original repository the fork was created from (on github)
- __origin:__ your forked copy of the repository (on github)
- __local:__ the local repository (on your computer)

### Forking the Repo

⚠️ **Please do not clone directly from our main repository**. This will point your local repo's [origin](https://www.git-tower.com/learn/git/glossary/origin) to our main repo, to which you will not have write access. Doing so will eventually cause an error when attempting to push code.  

👀 To get a copy of our repository and start making changes, follow the steps below.  

1. Fork [our respository](https://github.com/COVID-19-electronic-health-system/Corona-tracker), which creates a copy of the repository under your account to submit changes to.  
2. Clone the forked repository to your computer using the Clone button and address from github.  
`git clone <address of fork>`  
3. Change the working directory to your cloned project.  
Mac/Linux: `cd ./Corona-tracker`  
Windows: `cd .\Corona-tracker`  
4. Add our project repository as a remote to track changes.  
`git remote add upstream git@github.com:COVID-19-electronic-health-system/Corona-tracker.git`   
5. Create and checkout new branch in your local project to make changes.  
`git checkout -b <branch-name>`  
_Note: the `-b` is required when first creating the branch (combines `git checkout` and `git branch`)_  
6. Make changes by adding and committing files as necessary.  
`git add <filename> or git add -A`  
`git commit -m "<commit-msg>"`  
7. When ready to submit changes, first push the changes to the origin repository on Github (your fork).  
`git push -u origin <branch-name>`  
_Note: the `-u` is required when first pushing a new branch to the origin (your fork)._  
8. On github, [submit the pull request (PR)](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) to the upstream repository when changes are complete.  

Sometimes a pull request will require extra steps before going into review, which may include signing an agreement, testing the code, testing server deployment, or similar. If all checks are passed, then the PR is ready for review by the project maintainer.

### Updating a Forked Repo

After creating a forked repo, it can quickly become out of date with changes made in the upstream repo. How do we solve this?

Simple! We can use the `remote upstream` feature to `fetch` and `merge` changes into our forked repo.

1. Verify the `remote upstream` repo is configured based on our earlier steps.

`git remote -v`

Which should output something similar to:

```
origin	git@github.com:YOUR_USERNAME/COVID-19-TRACKER.git (fetch)
origin	git@github.com:YOUR_USERNAME/COVID-19-TRACKER.git (push)
upstream	git@github.com:COVID-19-electronic-health-system/Corona-tracker.git (fetch)
upstream	git@github.com:COVID-19-electronic-health-system/Corona-tracker.git (push)
```

2. Once we confirm the `remote upstream` repo exists, we can `fetch` the most recent changes.
   
```
git fetch upstream
git merge upstream/master
```


1. Now that our local repository has the changes, we need to push those changes back to our fork on github.

`git push origin`

### Helpful Resources

- [How to fork a repository in Github](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [GitHub Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
- [Git Forks and Upstream](https://www.atlassian.com/git/tutorials/git-forks-and-upstreams)
- [Git Documentation](https://git-scm.com/docs/)

## Front End Configuration

### Using Windows?

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

### Configure Yarn

NOTE: We are using [Yarn](https://yarnpkg.com/) instead of [NPM](https://en.wikipedia.org/wiki/Npm_(software)) as our package manager.

**Why Yarn?**
Its faster than NPM

**ONLY USE YARN**
👀⚠️ Please make sure that you **ONLY** use Yarn. Using NPM in combination with Yarn **will break the code** when the [continuous integration](https://codeship.com/continuous-integration-essentials) tests run.

This means that your Pull Request will not be merged into the code base. Avoid the errors and save the time. that will be tricky to debug.

See [great this example](https://github.com/COVID-19-electronic-health-system/Corona-tracker/pull/258).

#### Installing Yarn

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

## Back-End Configuration

_Note: Documentation currently only supports OSX_

**WE SUGGEST RUNNING ON QA ENVRIONMENT**

### What is a QA Envrionment?

A QA environment is where you test your upgrade procedure against data, hardware, and software that closely simulate the Production environment and where you allow intended users to test the resulting application.

### QA Envrionment Setup

To run locally, you'll need to have MongoDB installed locally. Follow [this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) guide if you don't have it already.

- Once you have MongoDB installed, start MongoDB, create a new database and create a user with admin privileges:
  - `brew services start mongodb` - start MongoDB
  - `ps aux | grep -v grep | grep mongod` - ensure MongoDB is running
  - `mongo` - open up MongoDB console
  - `use coronatracker` - switch to a new local database, coronatracker
  - `db.createUser({user: "admin", pwd:"foobar1",roles: ["readWrite","dbAdmin"]});` - create a new admin user for this database

You'll also need `radiks-server`, which you can install simply with **yarn**.

`yarn global add radiks-server`

- Create a `MONGODB_URI` environment variable on the same machine you're running `radiks-server`
- `export MONGODB_URI="mongodb://admin:foobar1@localhost:27017/test1"` - `admin`, `foobar1`, `test1` are the username/pass/db from the admin user you created when setting up MongoDB

### Starting up QA Environment

1. Ensure MongoDB is running (see Prerequisites).
2. Open a new tab on your console.
3. `radiks-server` - start the local radiks server.
4. `Yarn run start` - run the application locally.

### Developing in the QA Environment

1. Fork this repo `https://github.com/COVID-19-electronic-health-system/Corona-tracker`
2. `cd Corona-tracker/client`
3. `yarn install`
4. Create a new file, `.env.development`
5. On the Discord server, navigate to the #welcome channel, and click the pin icon on the top right of the window. Copy the `REACT_APP_QA_URL` code from the pinned message from Carter Klein.
6. In `.env.development`, write and save `REACT_APP_QA_URL: <THE-URL-CODE>`
7. `yarn start` - run the application locally

__REMEMBER to always sync up with the remote repository first before making any changes!__

# Style Guide

## Front End Style Guide

📝 Use Material-UI to build and style components.

📝 When styling, use Material-UI styling APIs.

🛑 Don’t use separate CSS file or inline-style i.e. “style={{width:’100px’}}"

📝 We already included ThemeProvider and CssBaseline APIs. Please use it to advantage of full Material-UI options and not worry about styling every little aspect.

📖 Material-UI has great documentation. There are a lot of examples and answers to many questions you may face from the community. You also can ask for help via Discord in the #front-end chat.

## Design Style Guide

_Coming soon_, see #ux-ui in Discord chat.

## Back End Style Guide

_Coming soon_, see #backend in Discord chat.

## Data Science / Analytics Style Guide

_Coming soon_, see #analytics in Discord chat.

## Git Style Guide
### Git branch naming 
**Use a structure of "verb/intent"**  

Examples:  
`upd/resource-list`  
`feat/omni-auth`  
`fix/auth-flow`  

Then, checkout and create your branch:  
`git checkout -b <branch-name>`

See [this opinion on naming branches](https://allenan.com/git-branch-naming-conventions/)

### Git message styling  
Keep git messages short, simple, and informative.  
You can create two lines with two -m followed by message back to back.  

First line: Verb + file changed + short overview.  
Second line: Description of work done  
`git commit -m "<commit-msg-title>" -m"<commit-msg-short-description>"`  

Example:  
`git commit -m "HOTFIX: App.js- fixed call to API" -m"fixed call to notifications API in componentDidMount(), which did not have the correct api key."`  

See this [article on good git commits](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)

# Contributing Code

This section describes how how workflow operates so that you can contribute code in a way that scales with a growing team. It is the standard way many open source projects operate with.

### Goals

The process described here has several goals:

- Fix problems that are important to users
- Maintain CoronaTracker's quality
- Maintain security
- Engage and scale wiht a growing community in working toward the best possible CoronaTracker
- Enable a sustainable system for CoronaTracker's maintainers to review contributions

## Your First Code Contribution

Unsure where to begin contributing to CoronaTracker? You can start by looking through [these "good first issue" and "help-wanted" issues.](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues?q=is%3Aopen+label%3A"good+first+issue"+label%3A"help+wanted")

## Git Contribution Workflow

### Submitting Code
1. First, before starting to code, get the latest updates from the [upstream](#terminology) master branch.

`git status` <-- always check what branch you are on!    
`git checkout master`  
`git fetch upstream master`  
`git merge upstream/master` <-- updates local repo based on upstream    
`git push origin master` <-- updates the origin repo based on local   

2. Create and checkout new branch to make changes.  
See [style guide on naming branches](###Git-branch-naming)

3. Write some code, make commits, etc  
*make code changes and update docs/dependencies*   
`git add <filename> or git add -A (for all updated files)`   
`git commit -m "<commit-msg-title>" -m"<commit-msg-short-description>"`  

4. Make sure to update all dependencies  
Example: your updated React component has new properties and is being used
elsewhere, make sure to update that dependant file.

5. Update all docs if necessary, like [README.md](./README.md)  
Update details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.

6. Before submitting, [squash](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing#squashing) your code into with git [rebase](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing#rebasing) 
Squashing your code means reducing all your local commits to one commit that will be placed in the master's Git history.  

This keeps our Git history clean and straight forward to read over time.  

See this article from Mozilla's Servo Project on [squashing and rebasing](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing#squashing)


```
pick 2ac7894: GM: add account limit
pick 5c939bd: GM: Code re-formatting
pick 23bsdf2: GM: Added the refactolators
pick 92n20sc: GM: Re-hashed the flumboolator
...
pick d928404: GM: Activated the perculators

Rebase 2ac7894..d928404 onto 5f57fe2 (12 command(s))
 
Commands:
p, pick = use commit
r, reword = use commit, but edit the commit message
e, edit = use commit, but stop for amending
s, squash = use commit, but meld into previous commit
f, fixup = like "squash", but discard this commit's log message
x, exec = run command (the rest of the line) using shell

These lines can be re-ordered; they are executed from top to bottom
If you remove a line here THAT COMMIT WILL BE LOST.
However, if you remove everything, the rebase will be aborted.

Note that empty commits are commented out
```

rebase d928404 all the way to 2ac7894 **INTO** 5f57fe2 (our last commit).

```
p 2ac7894: GM: add account limit
s 5c939bd: GM: Code re-formatting
s 23bsdf2: GM: Added the refactolators
s 92n20sc: GM: Re-hashed the flumboolator
...
s d928404: GM: Activated the perculators

Rebase 2ac7894..d928404 onto 5f57fe2 (12 command(s))
 
Commands:
p, pick = use commit
r, reword = use commit, but edit the commit message
e, edit = use commit, but stop for amending
s, squash = use commit, but meld into previous commit
f, fixup = like "squash", but discard this commit's log message
x, exec = run command (the rest of the line) using shell

These lines can be re-ordered; they are executed from top to bottom
If you remove a line here THAT COMMIT WILL BE LOST.
However, if you remove everything, the rebase will be aborted.

Note that empty commits are commented out
```

Then we make the final message for our NEW sqaushed commit.

```
This is a combination of 12 commits
The first commit's message is:
HOTFIX: App.js- fixed call to API

Fixed call to notifications API in componentDidMount(), which did not have the correct api key.

Please enter the commit messages for your changes. Lines starting with '#
will be ignored, and an empty message aborts the commit.

Author:     coronatracker-l33t-dev <l33t-dev@protonmail.com>
Date:       Wed Jan 27, 14:43:57 2020 +300

rebase in progress; onto 5f57fe2
you are currently editing a commit while rebasing branch 'hotfix-api-call-notifications' on '5f57fe2'
changes to be committed:
       modifed: src/components/App.js
```

See [Style Guide- Git](###Git-message-styling) for the proper way to create squashed message.

We save and quit with `esc` + `:x`

Now we can check our new commit history with  
`git log --oneline`

Then we push the edited branch to our origin. Since we rewrote the history, we need to force push.

`git push --force origin HEAD`

7. Push the changes to the origin repository on Github (your fork)  
`git push origin <branch-name>`

8. On github.com, [submit the pull request PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) to the `upstream` repository when changes are complete.

### Editing Code After Reviewer Comments
Pull request will require extra steps before going into review, such as going through continuous integration. If all checks are passed, then the PR is ready for review by the project maintainer.

1. If the reviewer leaves some comments to fix your code, fix them.

To update your code, then do something like this:

`git add <the file you fixed>`  
`git commit -m "<message>"`

See [git commit style](###git-message-styling)
See [Fixing Review Comments](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing#fixing-review-comments) from Mozilla's servo Project.

2. Sometimes you may have a merge conflict. This can happen if someone merged new code while your patch is still in review. Then git might not be able to figure out how to apply your patch on top of the new code.

So we rebase. It is HIGHLY RECOMMENDED you read this section on [Rebasing](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing#rebasing) from Mozilla's servo Project for an explaination on why. There are diagrams to help you understand WHY and how rebasing works. This is a common issue for new developers. Take the time to read this short part entry. It will save you ALOT of time in the long run.

`git fetch upstream` <----- get latest code from upstream   
`git rebase upstream/master` <----- attach your linear git commit history to head of upstream's git commit history. This avoids merge commits.  

Remember to [squash your commits to one commit](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing#squashing).

3. Once the PR is accepted, or the upstream code changes, update the master branch from upstream. See step one from [Submitting Code](###Submitting-Code)

4. From here, you have two options, either update the repo or delete the branch. To see how to do both see [Updating The Repo.](###updating-the-repo)

## Additional resources

@whoabuddy's [article on how to contribute to Blockstack](https://app.sigle.io/whoabuddy.id.blockstack/s0zMy6UW3cTOfR-Lm9dCg) serves as a great way to understand proper github workflow an open source project.

Mozilla's Servo [Github Forking workflow](https://github.com/servo/servo/wiki/Github-workflow) project also serves as a great example of how to we decided to organize our project.

Mozilla's Servo project also has a great article on a ["Beginner's guide to rebasing and squashing"](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing).

Atlassian has a great series on ["How to stay synced with Git"](https://www.atlassian.com/git/tutorials/syncing) which provides a nice overview of useful commands.

## Contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the pull request template](/.github/pull_request_template.md)
2. Follow the style guides listed here
3. After you submit your pull request, verify that all Travis CI steps are passing. <details><summary>What if the Travis CI fails?</summary>If a Travis CI step is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the Travis CI steps for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Merging pull requests

Organization members can merge a Pull Request. Currently, we require a minumum of other developer to review the code. As the project grows, we anticipate that this will grow to two developers at minimum. We will update this document when the time comes.

Ideally, the team lead or back up team lead should lookg over your code, and give any reviews.

Once you open a pull request make sure that it passes all continous integration tests. If they do not, please attempt to fix them before asking for a review. If you do need help, mention that in the Pull Request comments and in the Discord channel for your team.

# Bug Reports

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

# Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for CoronaTracker, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please search for similar keywords as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

## How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of CoronaTracker which the suggestion is related to. You can use [licecap](https://www.cockos.com/licecap/) or [gyazo](https://gyazo.com/en) to record GIFs on macOS and Windows, and [silentcast](https://github.com/colinkeenan/silentcast) or [byzanz](https://manpages.ubuntu.com/manpages/bionic/en/man1/byzanz-record.1.html) on Linux.
- **Explain why this enhancement would be useful** to most CoronaTracker users.
- **Specify the name and version of the OS you're using.**

# Common Commands

## Git

### Information

- Show the working tree status
`git status`
- show commit logs
`git log`
  - Note: optionally can add formatting
  `git log --pretty=format:"%h %s" --graph`
- show all branches
`git branch -a`
- list remote repositories
`git remote -v`

### Making Changes

- Checkout branch to make changes
`git checkout <branch>`
- Add all files with changes
`git add -A`
- Change file name
`git mv <old-file> <new-file>`
- Delete file
`git rm <file>`

### Committing Changes

- Make changes to the file
`atom <filename>` _(or text editor of your choice)_
- Update the index
`git add <filename>`
- Commit the change with a message
`git commit -m "Commit Message"`
- Push change to repository (on Github)
`git push -u origin <branch>`

### Modify last commit message

`git commit --amend`

### Updating the Repo

After a PR is accepted, bring master up to date.

`git checkout master`  
`git fetch --all`  
`git merge upstream/master` - fast-forward to upstream changes  
`git push origin master` - update changes on github to origin/master  

If deleting the branch:

`git push origin -d upd/resource-list`  
`git branch -d upd/resource-list`  

If updating the branch for re-use:

`git checkout upd/resource-list`  
`git rebase master`  
`git push origin`  

### Rebasing
From git-tower:   
"In Git, the rebase command integrates changes from one branch into another. It is an alternative to the better known "merge" command.

Most visibly, rebase differs from merge by rewriting the commit history in order to produce a straight, linear succession of commits."

See [What is a rebase in Git?](https://www.git-tower.com/learn/git/glossary/rebase)

[Overview of `rebase`.](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

[How to use `rebase`.](https://help.github.com/en/github/using-git/using-git-rebase-on-the-command-line)

Why do we prefer rebase versus merge?  
"Some people prefer to go without such automatic merge commits. Instead, they want the project's history to look as if it had evolved in a single, straight line. No indication remains that it had been split into multiple branches at some point."

⚠️ 👀 **WARNING:**  
You should use rebase only for squashing YOUR local commits prior to a pull request. DO NOT ever to rebase commits that have already been published to master. This will rewrite our public project's history. This applies to maintainers of the project.

Read this EXCELLENT article on [Rebase as an Alternative to Merge](https://www.git-tower.com/learn/git/ebook/en/desktop-gui/advanced-topics/rebase#start) from git-tower.

[See Beginner's guide to rebasing and squashing.](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing)

### Cleaning Up

`git fetch --all` - Fetch changes from remote  
`git push origin -d <branch>` - Delete Remote Branch  
`git branch -d <branch>` - Delete Local Branch  
`git branch -D <branch>` - Force Delete Local Branch  
`git branch -dr <remote>/<branch>` - Delete Remote-Tracking Branch  

### Resources

- [Git tower- Learn Version Control with Git:
A step-by-step course for the complete beginner](https://www.git-tower.com/learn/git/ebook/en/command-line/introduction)
- [Git Manual](https://git-scm.com/doc)
- [Dangit, git!](https://dangitgit.com/) with real problems and solutions.
- [GitHub Standard Fork & Pull Request Workflow (Chaser324)](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
- [Digital Ocean - How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)


## Yarn

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

## Other commands

Commands you probably won't use, but are good to know anyway.

`yarn init`  
initializes the development of a package.  
Similar to `npm init`  
[See more](https://classic.yarnpkg.com/en/docs/cli/init)

`yarn upgrade`  
Upgrades packages to their latest version based on the specified range  
Similar to `npm update <package-name>@<verision>`  
[See more](https://classic.yarnpkg.com/en/docs/cli/upgrade)
