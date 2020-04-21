![Corona Tracker Logo](https://dg1fd6ea8poyj.cloudfront.net/images/Logo_CORONATRACKER_Text_Logo.png)

[![Build Status](http://img.shields.io/travis/COVID-19-electronic-health-system/Corona-tracker/master.svg?style=for-the-badge)](https://travis-ci.org/COVID-19-electronic-health-system/Corona-tracker)

A tool to help reduce the number of unnecessary hospital visits, educate the public on facts vs myths, and provide a health and wellbeing chart for logging their journey during these uncertain and tumultuous times.

## Get involved and help out!

- [Join our Discord Server](https://discord.gg/pPERUuv)
- [Visit our Website CoronaTracker.me](https://coronatracker.me)
- [View the Beta Version of the App](https://coronatrackerbeta.com)
- View our community health files:
    - [Corona Tracker README.md:](https://github.com/COVID-19-electronic-health-system/Corona-tracker/blob/master/README.md)
    - [Contributing Guidelines:](https://github.com/COVID-19-electronic-health-system/.github/blob/master/CONTRIBUTING.md) including more about the project and how to get involved
    - [Support Documentation:](https://github.com/COVID-19-electronic-health-system/.github/blob/master/SUPPORT.md) including team members, resources, and references
    - [Code of Conduct:](https://github.com/COVID-19-electronic-health-system/.github/blob/master/CODE_OF_CONDUCT.md) including examples of behavior that contributes to creating a positive environment

## Application Overview

[View our contributing guidelines](https://github.com/COVID-19-electronic-health-system/.github/blob/master/CONTRIBUTING.md) to learn more about the project, our values, and regular town hall meetings for the group.

[View our support document](https://github.com/COVID-19-electronic-health-system/.github/blob/master/SUPPORT.md) to learn more about the project leads, resources, and technology.

## Front-End Overview

Technology Stack: React, Material UI, Jest

- Frontend: [React](https://github.com/facebook/react)

### Material UI

- Material UI: [Installation](https://material-ui.com/getting-started/installation/) and [Usage](https://material-ui.com/getting-started/usage/)
- Material Design: [Color System](https://material.io/design/color/)
- Material Design: [Accessibility](https://material.io/design/usability/accessibility.html)
- Udemy: [Material UI Courses](https://www.udemy.com/topic/material-design/)

### React

- Tutorial: [Intro to React](https://reactjs.org/tutorial/tutorial.html)
- Udemy: [React Courses](https://www.udemy.com/topic/react/)
- PluralSight: [React Paths and Courses](https://www.pluralsight.com/search?q=react)


### Useful Github Repo Links

- [Contributing Guidelines - get involved!](https://github.com/COVID-19-electronic-health-system/.github/blob/master/CONTRIBUTING.md)
- [Design, Wireframes, and Brand Guide](./design)
- [Client, based on Create React App](./client)
- [Translations](./Translations/Translations.md)

### Wireframe Overview

![app overview](/design/wireframes/FINAL-V1-03.20/MASTER_WIREFRAME.png)

## Questions?

Feel free to chat with us on [Discord](https://discord.gg/pPERUuv) and message `@Anthony A` if you have any questions!

Our group is new developer friendly and happy to help in any way!

We also welcome your Github contributions and encourage [opening an issue](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues) before filing a pull request. Please see [our contributing guidelines](https://github.com/COVID-19-electronic-health-system/.github/blob/master/CONTRIBUTING.md) for more information.

## Appendix

### Design considerations

__CSS Design considerations__

We have decided to use regular CSS files to keep things simple for now. This allows for more contributors and less time to upskill to contribute.

Once the MVP is done the team can discuss if we want to transition it to [styled-components](https://styled-components.com) or something like CSS modules.

Folder paths:
- CSS files are located in `/client/src/css`
- Components are located in `/client/src/components`


## Scripts

Always use `yarn` not  `npm` or the app will break. In the project directory, you can run:

### Yarn

[Full list of yarn commands](https://classic.yarnpkg.com/en/docs/cli/)


### `yarn install`
- Install all node modules
- Similar to `npm i`
- [More Info](https://classic.yarnpkg.com/en/docs/cli/install)

### `yarn add`
- Installs a package and any packages that it depends on
- Similar to `npm install <package-name>`
- [More Info](https://classic.yarnpkg.com/en/docs/cli/add)

### `yarn remove`
- Removes an unused package from your current package.json
- Similar to `npm uninstall <package-name>`
- [More Info](https://classic.yarnpkg.com/en/docs/cli/remove)

### `yarn init`
- Initializes the development of a package.
- Similar to `npm init`
- [More Info](https://classic.yarnpkg.com/en/docs/cli/init)

### `yarn upgrade`
- Upgrades packages to their latest version based on the specified range
- Similar to `npm update <package-name>@<verision>`
- [More Info](https://classic.yarnpkg.com/en/docs/cli/upgrade)

### `yarn lint`

- Runs ESLint to clean up code before you submit any pull requests.

### `yarn start`

- Runs the app in the development mode.<br />
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

- Launches the test runner in the interactive watch mode.<br />
- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

- Builds the app for production to the `build` folder.<br />
- It correctly bundles React in production mode and optimizes the build for the best performance.

- The build is minified and the filenames include the hashes.<br />
- Your app is ready to be deployed!

- See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Git / Github

__Git Resources__

- [Git Command Reference](https://git-scm.com/doc)
- Git Tower: [Learn Version Control with Git](https://www.git-tower.com/learn/git/ebook/en/command-line/introduction)
- Git Tower: [What is a rebase in Git?](https://www.git-tower.com/learn/git/glossary/rebase)
- Git Tower: [`rebase` as an alternative to `merge`](https://www.git-tower.com/learn/git/ebook/en/desktop-gui/advanced-topics/rebase#start)
- Atlassian: [Overview of `rebase`](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
- Github Help: [How to use `rebase`](https://help.github.com/en/github/using-git/using-git-rebase-on-the-command-line)
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Oh Shit, Git!?!](https://ohshitgit.com/) with real problems and solutions

> ⚠️ 👀 **WARNING:**
> You should use rebase only for squashing YOUR local commits prior to a pull request. DO NOT ever to rebase commits that have already been published to master. This will rewrite our public project's history. This applies to maintainers of the project.

__Github Resources__

- Github Guides: [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
- [GitHub Standard Fork & Pull Request Workflow (Chaser324)](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
- [Digital Ocean - How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)
- Mozilla Servo: [Beginner's guide to rebasing and squashing](https://github.com/servo/servo/wiki/Beginner's-guide-to-rebasing-and-squashing)
