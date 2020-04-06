![Corona Tracker Logo](./client/src/img/Logo_CORONATRACKER_Text_Logo.png)

[![Build Status](http://img.shields.io/travis/COVID-19-electronic-health-system/Corona-tracker/master.svg?style=for-the-badge)](https://travis-ci.org/COVID-19-electronic-health-system/Corona-tracker)

A tool to help reduce the number of unnecessary hospital visits, educate the public on facts vs myths, and provide a health and wellbeing chart for logging their journey during these uncertain and tumultuous times.

## Get involved and help out!
- [Join our Discord Server](https://discord.gg/pPERUuv)
- [Visit our Website CoronaTracker.me](https://coronatracker.me)
- [View our Contributing Guidelines](./CONTRIBUTING.md)
  - __*Use these guidelines to onboard, run the application locally, or in QA*__

<!-- TOC -->

## Table of Contents

- [We are in crisis and we need to act](#we-are-in-crisis-and-we-need-to-act)
- [TL;DR FAQ](#tldr-faq)
  - [Who is this app for?](#who-is-this-app-for)
  - [What is the benefit this app is providing?](#what-is-the-benefit-this-app-is-providing)
  - [How is this app different from the others?](#how-is-this-app-different-from-the-others)
  - [What insights have been considered?](#what-insights-have-been-considered)
  - [Who are the stakeholders?](#who-are-the-stakeholders)
- [Application Overview](#application-overview)
  - [Idea](#idea)
  - [Technology Stack](#technology-stack)
  - [Wireframe Overview](#wireframe-overview)
- [Project Leads and Contact Info](#project-leads-and-contact-info)
  - [Useful Github Repo Links](#useful-github-repo-links)
  - [Carter Klein: back end, front end, systems architecture](#carter-klein-back-end-front-end-systems-architecture)
  - [Brian H. Hough: design, social media marketing, front end](#brian-h-hough-design-social-media-marketing-front-end)
  - [Anthony A: front end code, documentation and booking meetings with experts](#anthony-a-front-end-code-documentation-and-booking-meetings-with-experts)
  - [Akil Hylton: front end code, documentation, has machine learning experience](#akil-hylton-front-end-code-documentation-has-machine-learning-experience)
  - [Nick G: advising on data model, analytics, data science](#nick-g-advising-on-data-model-analytics-data-science)
  - [Salvatore Volpe: translations, analytics](#salvatore-volpe-translations-analytics)
  - [Luke Lin: Managing discord, discord roles, front end, translations](#luke-lin-managing-discord-discord-roles-front-end-translations)
- [Questions?](#questions)
- [Appendix](#appendix)
  - [COMING SOON: Instructions to install, build, and run locally](#coming-soon-instructions-to-install-build-and-run-locally)
  - [Design considerations](#design-considerations)
- [Licensing](#licensing)

<!-- /TOC -->

## We are in crisis and we need to act

The COVID-19 outbreak is a threat to the global population with formidable challenges to the health system. Social distancing measures and telemedicine have been established to mitigate clinic burden and reduce additional spread. The behavior of the general public plays an important part in effectively fighting the outbreak and in improving the situation for persons that need medical care. There is a pressing need to provide accurate information and appropriate suggestions to the general population in order to avoid causing overburden of hospitals across the globe.

After discussions with doctors, start ups, technologists, an academic researchers, we narrowed down some issues of critical importance that the application will address. Specifically, we list major concerns from a call with Ameer (Systems Architect) and Dr. Kristen Kent. There are several key facets of concern, namely __medical considerations__ (i.e. people aren't realizing the severity of this; it's getting real very fast; and doctors/medical professionals are ill-equipped to test for this), as well as __global concerns__ (i.e. the economy is sinking; resources are directly needed for equipment like isolation rooms and protective gear; there is a need for more ventilators and space; schools are closing; etc.).

Furthermore, the effects of social distancing and isolation and the impact of lost jobs and finances is already having a negative impact on the physical, mental, emotional, and sprittual well-being of our society. After learning all of this, we realized that there's a limited amount of time to act, and decisive action must be taken in order to do our part and help our neighbors and healthcare professionals on the ground working towards a solution, keeping people as healthy as possible, and strengthening the well being of our society.

(The initial plan was developing a EHR, but this is too ambitious in scope and unecessary. However [@BrianHHough took down some great notes](https://docs.google.com/document/d/15DekMbBnLjWSk_hAQclLzTFBCYygyeMGkGknJrBHnnM/edit?usp=sharing) that @SomeMoosery and @tesla809 will add to.)

## TL;DR FAQ

### Who is this app for?

This app is for the global population going through this crisis: those who are feeling generally well, possibly not too well physically or mentally, and are concerned they may be carrying COVID-19 or are showing symptoms.

The target population of the application includes:
1. cell phone users between the ages of 25-45. These users will have a high likelihood of being caretakers of young children and older adults
2. high-risk populations with comorbidites including diabetes, obesity, kidney diseases, and immune system disorder

### What is the benefit this app is providing?

This application will address a global public health need by promoting accurate information to the general population and thereby help healthcare workers on the front lines to provide the necessary care to those in need.

### How is this app different from the others?

The differentiating characteristics of our web application include:
1. integrating education, measurement of education with key performance indicators, and insights via data analytics
2. decentralization and privatization which allows for data ownership by users
3. data interoperability which allows for modular and extensible features and a B2C approach to medical care
4. support of multiple languages to target developing regions with high levels of urbanization, poor medical infrastructure, yet high mobile phone connectivity

### What insights have been considered?

Over the past week, the team has been in consultation with individuals and stakeholders in the academic, medical, business, and technology sectors. The provided insights into our application development include:
1. understanding viral infection, disease pathogenesis, and public health guidelines followed by medical staff at a top tier NYC hospital
2. providing education to the general public and patients is crucial to avoid unnecessary ER visits and engage patients in their health
3. properly scoping our product to be an enterprise ready application by including key features based on expert feedback
4. developing useful survey content for users and stakeholders that can address public health and clinical research needs
5. building a decentralized platform to increase data ownership and privacy

### Who are the stakeholders?

- All individuals. This affects all society.
- Public health authorities. They need to inform, educate, and support citizens.
- Researchers. There is enormous implications for individual's wellbeing and health and so we must try to understand both how individuals are traversing their journey, and if education is significantly improving characteristics in a user's health/wellbeing chart.

## Application Overview

### Idea

The idea **for our IPR** is to help doctors monitor large numbers of patients' symptoms over time (daily or less). Doctors can text the patients if the patients are still ok, or call the patient if they start to get worse. Or, as time goes on, the doctor can refer them to telemedicine service like Jamaica Hospital or other. This will ultimately manifest itself as, mainly, a dashboard and a survey that people update daily with information.

### Technology Stack

- Frontend: [React](https://github.com/facebook/react)
- Backend: [Blockstack](https://blockstack.org/about)
- Database: [Gaia](https://github.com/blockstack/gaia)
- Deployment: [AWS](https://aws.amazon.com/)

### Wireframe Overview

![app overview](/design/wireframes/FINAL-V1-03.20/MASTER_WIREFRAME.png)

## Project Leads and Contact Info

If you have questions related to application development, these are the people to talk to!

### Useful Github Repo Links

- [Contributing Guidelines - get involved!](./CONTRIBUTING.md)
- [Design, Wireframes, and Brand Guide](./design)
- [Client, based on Create React App](./client)
- [Translations](./Translations/Translations.md)

### Carter Klein: back end, front end, systems architecture

Github: @Carter Klein
Discord: @Carter Klein

### Brian H. Hough: design, social media marketing, front end

Github: @Brian H. Hough
Discord: @InterstellarX

### Anthony A: front end code, documentation and booking meetings with experts

Open to peer program any issue or bugs!

Github: @tesla809
Discord: @Anthony A.

### Akil Hylton: front end code, documentation, has machine learning experience

Open to peer program any issue or bugs!

Github: @akilhylton
Discord: @Akil Hylton

### Nick G: advising on data model, analytics, data science

See [analytics thread / issue.](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues/51)

Github: @ngiangre
Discord: @NickG

### Salvatore Volpe: translations, analytics

Github: @salvolpe
Discord: @laseplov

### Luke Lin: Managing discord, discord roles, front end, translations

Github: @lukelin1991
Discord: @kirbypooh

## Questions?

Feel free to chat with us on [Discord](https://discord.gg/pPERUuv) and message @Anthony A if you have any questions!

Our group is new developer friendly and happy to help in any way!

We also welcome your Github contributions and encourage [opening an issue](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues) before filing a pull request. Please see [our contributing guidelines](./CONTRIBUTING.md) for more information.

## Appendix

### COMING SOON: Instructions to install, build, and run locally

### Design considerations

#### CSS Design considerations

We have decided to use regular CSS files to keep things simple for now. This allows for more contributors and less time to upskill to contribute.

Once MVP is done the team can discuss if we want to transition it to styled-components or something like CSS modules.

Folder paths
CSS is located in /client/src/css
Components are located in /client/src/components

Style guide for CSS files:

**Naming convention:**
Component -> Sample.js
CSS file -> Sample.css
Reducer -> sampleReducer.js

To avoid naming collisions:
prefix class names with the name of component and link with kebab case.
Class name -> .Sample-header { ... }

**How to handle state:**
Let's use Redux.
Create action and reducer with an appropriate name.
Add them to the /actions and /reducers folder.
**We need help to implement this.**

**Testing**
No need to worry about testing for now.
If you choose to add tests, please place in client/src/tests.

#### A Note on Blockstack, Privacy

In these strange and often trying times, individual privacy is of utmost concern. In order to bootstrap this tool and get it off the ground and into the hands of those in need as quickly as possible, a serverless approach works great. Blockstack is decentralized - individuals still own their information. Everything is kept on the client until given permission. Therefore, we felt it best suited the overall needs.

To learn more about Blockstack, please [visit their website](https://blockstack.org/).

## Licensing

This repository and all contributions herein are [licensed under the MIT license](./LICENSE). Please note that, by contributing to this repository, whether via commit, pull request, issue, comment, or in any other fashion, you are explicitly agreeing that all of your contributions will fall under the same permissive license.
