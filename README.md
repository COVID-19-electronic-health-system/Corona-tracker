![Corona Tracker Logo](./client/src/img/Logo_CORONATRACKER_Text_Logo.png)

[![Build Status](http://img.shields.io/travis/COVID-19-electronic-health-system/Corona-tracker/master.svg?style=for-the-badge)](https://travis-ci.org/COVID-19-electronic-health-system/Corona-tracker)

A tool to help reduce the number of unnecessary hospital visits, educate the public on facts vs myths, and provide a health and wellbeing chart for logging their journey during these uncertain and tumultuous times.

## Join our Discord Server

https://discord.gg/pPERUuv

## Website
Visit [CoronaTracker.me](https://github.com/COVID-19-electronic-health-system/Corona-tracker)

## VIEW [CONTRIBUTING](./CONTRIBUTING.md) TO ONBOARD, RUN APPLICATION LOCALLY OR IN QA

## We are in crisis and we need to act

The COVID-19 outbreak is a threat to the global population with formidable challenges to the health system. Social distancing measures and telemedicine have been established to mitigate clinic burden and reduce additional spread. The behavior of the general public plays an important part in effectively fighting the outbreak and in improving the situation for persons that need medical care. There is a pressing need to provide accurate information and appropriate suggestions to the general population in order to avoid causing overburden of hospitals across the globe.

After discussions with doctors, start ups, technologists, an academic researchers, we narrowed down some issues of critical importance that the application will address. Specifically, we list major concerns from a call with Ameer (Systems Architect) and Dr. Kristen Kent. There are several key facets of concern, namely <b>medical considerations</b> (i.e. people aren't realizing the severity of this; it's getting real very fast; and doctors/medical professionals are ill-equipped to test for this), as well as <b>global concerns</b> (i.e. the economy is sinking; resources are directly needed for equipment like isolation rooms and protective gear; there is a need for more ventilators and space; schools are closing; etc.). Furthermore, the effects of social distancing and isolation and the impact of lost jobs and finances is already having a negative impact on the physical, mental, emotional, and sprittual well-being of our society. After learning all of this, we realized that there's a limited amount of time to act, and decisive action must be taken in order to do our part and help our neighbors and healthcare professionals on the ground working towards a solution, keeping people as healthy as possible, and strengthening the well being of our society.

(The initial plan was developing a EHR, but this is too ambitious in scope and unecessary. However [@BrianHHough took down some great notes](https://docs.google.com/document/d/15DekMbBnLjWSk_hAQclLzTFBCYygyeMGkGknJrBHnnM/edit?usp=sharing) that @SomeMoosery and @tesla809 will add to.)

## COMING SOON Install, Build and Run Locally (For OSX, Windows)

## TL;DR FAQ

### Who is this app for?

This app is for the global population going through this crisis: those who are feeling generally well, possibly not too well physically or mentally, and are concerned they may be carrying COVID-19 or are showing symptoms.

The target population of the application includes: 1) Cellphone users between the ages of 25-45. These users will have a high likelihood of being caretakers of young children and older adults and 2) High-risk populations with comorbidites including diabetes, obesity, kidney diseases, and immune system disorder.

### How is this app different from the others?

The differentiating characteristics of our web application include: 1) integrating education, measurement of education with key performance indicators, and insights via data analytics, 2) decentralization and privatization which allows for data ownership by users, 3) data interoperability which allows for modular and extensible features and a B2C approach to medical care, and 4) support of multiple languages to target developing regions with high levels of urbanization, poor medical infrastructure, yet high mobile phone connectivity.

### What insights have been considered?

Over the past week, the team has been in consultation with individuals and stakeholders in the academic, medical, business, and technology sectors. The provided insights into our application development include: 1) understanding viral infection, disease pathogenesis, and public health guidelines followed by medical staff at a top tier NYC hospital, 2) providing education to the general public and patients is crucial to avoid unnecessary ER visits and engage patients in their health, 3) properly scoping our product to be an enterprise ready application by including key features based on expert feedback, 4) developing useful survey content for users and stakeholders that can address public health and clinical research needs, and 5) building a decentralized platform to increase data ownership and privacy.

### Who are the stakeholders?

- All individuals. This affects all society
- Public health authorities. They need to inform, educate, and support citizens.
- Researchers. There is enormous implications for individual's wellbeing and health and so we must try to understand how 1) individuals are traversing their journey and 2) if education is significantly improving characteristics in user's health/wellbeing chart.

## Idea

The idea **for our IPR** is to help doctors monitor large numbers of patients' symptoms over time (daily or less). Doctors can text the patients if the patients are still ok, or call the patient if they start to get worse. Or, as time goes on, the doctor can refer them to telemedicine service like Jamaica Hospital or other. This will ultimately manifest itself as, mainly, a dashboard and a survey that people update daily with information.
### What is the benefit this app is providing?

This application will address a global public health need by promoting accurate information to the general population and thereby help healthcare workers on the front lines to provide the necessary care to those in need.


## App overview
![app overview](/design/wireframes/FINAL-V1-03.20/MASTER_WIREFRAME.png)

## Technology Stack

### Frontend:

React
Material-UI- for all new components
React-Bootstrap - deprecated, used in old components which need to be converted to Material-UI.

### "Backend"/DB:

Blockstack Platform (Radiks, Gaia)

### Testing:

Jest

## Questions Related to application development?

### Reach-out to:

#### @Carter Klein is implementing backend with blockstack, front end, systems architecture.

See [/design/backend](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design), [/design/models](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design/database_models), and [/client](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/client)
(@Carter Klein on discord)

#### @Brian H. Hough: is implementing design, social media marketing, front end code.

See [/design](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design) and [/design](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design/wireframes)
(@InterstellarX on discord)

#### @tesla809: is implementing front end code, documentation and booking meetings with experts.

Open to peer program any issue or bugs!
See [/client](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/client)
(@Anthony A. on discord)

#### @akilhylton: is implementing front end code, documentation, has machine learning experience.

Open to peer program any issue or bugs!
See [/client](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/client)
(@Akil Hylton on discord)

#### @ngiangre: is advising on the data model, analytics, data science

See [analytics thread](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues/51)
(@NickG on discord)

#### @salvolpe: is helping with translations, analytics

(@laseplov on discord)
See [translations.md](translations.md)

#### @lukelin1991: Managing discord, discord roles, front-end, translations.

(@kirbypooh on discord)

And YOU!
How would you like to help?
see [CONTRIBUTING.md](./CONTRIBUTING.md) PENDING

## Questions?

Submit an [issue](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues). Issues are welcomed! We are new developer friendly and happy to help in anyway!
Message @Anthony A. on the [discord](https://discord.gg/pPERUuv) if you have any questions!

## Appendix

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
