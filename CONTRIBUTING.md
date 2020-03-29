# Contributing

When contributing to this repository, please first discuss the change you wish to make via [Issues](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues),
[Kanban Board](https://github.com/COVID-19-electronic-health-system/Corona-tracker/projects/1), or [Discord](https://discord.gg/pPERUuv) before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Local development (Currently Only Documentation for OSX)

#### Prerequisites

**WE SUGGEST RUNNING ON QA ENVRIONMENT**

To run locally, you'll need to have MongoDB installed locally. Follow [this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) guide if you don't have it already

- Once you have MongoDB installed, start MongoDB, create a new database and create a user with admin privileges:
  - `brew services start mongodb` - start MongoDB
  - `ps aux | grep -v grep | grep mongod` - ensure MongoDB is running
  - `mongo` - open up MongoDB console
  - `use coronatracker` - switch to a new local database, coronatracker
  - `db.createUser({user: "admin", pwd:"foobar1",roles: ["readWrite","dbAdmin"]});` - create a new admin user for this database

You'll also need `radiks-server`, which you can install simply with  
**npm**
`npm install -g radiks-server`
**yarn**
`yarn global add radiks-server`


- Create a `MONGODB_URI` environment variable on the same machine you're running `radiks-server`
  - `export MONGODB_URI="mongodb://admin:foobar1@localhost:27017/test1"` - `admin`, `foobar1`, `test1` are the username/pass/db from the admin user you created when setting up MongoDB

#### Installation and run steps

1. Fork this repo `https://github.com/COVID-19-electronic-health-system/Corona-tracker`
2. `cd Corona-tracker/client`
3. `npm i`
4. Ensure MongoDB is running (see Prerequisites)
5. `radiks-server` - start the local radiks server
6. `npm run start` - run the application locally

### QA development

#### Installation and run steps

1. Fork this repo `https://github.com/COVID-19-electronic-health-system/Corona-tracker`
2. `cd Corona-tracker/client`
3. `npm i`
4. Create a new file, `.env.development`
5. On the Discord server, navigate to the #welcome channel, and click the pin icon on the top right of the window. Copy the `REACT_APP_QA_URL` code from the pinned message from Carter Klein.
6. In `.env.development`, write and save `REACT_APP_QA_URL= <THE-URL-CODE>`.
7. On the Discord server, navigate to the #front-end channel, and click the pin icon on the top right of the window. Copy the `REACT_APP_MAPBOX_TOKEN` code from the pinned message from Ariana Hwang (@alt_ariana).
8. In `.env.development`, write and save `REACT_APP_MAPBOX_TOKEN= <THE-API-KEY-CODE>`.
9. `npm run start` - run the application locally

#### BEFORE YOU MAKE CHANGES TO YOUR FORKED CODE VIA BRANCH OR MASTER

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

## Pull request process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Be sure to follow the [Code of Conduct](./CODE_OF_CONDUCT.md)

## What should I know before I get started?

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for CoronaTracker. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports (if applicable).

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/atom/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, **open a new issue** and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Check the [README](./README.md)** for a list of common questions, abstracts, concerns, etc.
- **Perform a [cursory search](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

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

### Pull Requests

The process described here has several goals:

- Maintain CoronaTracker's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible CoronaTracker
- Enable a sustainable system for CoronaTracker's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](/.github/pull_request_template.md)
2. Follow the stylesguides - COMING SOON
3. After you submit your pull request, verify that all Travis CI steps are passing <details><summary>What if the Travis CI are failing?</summary>If a Travis CI step is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the Travis CI steps for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.
