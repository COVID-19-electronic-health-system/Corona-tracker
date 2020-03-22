![CoronaTracker Text Logo](./client/src/img/Logo_CORONATRACKER_Text_Logo.png)

[![Build Status](https://travis-ci.org/COVID-19-electronic-health-system/Corona-tracker.svg?branch=master)](https://travis-ci.org/COVID-19-electronic-health-system/Corona-tracker)

A progressive web application designed to help doctors triage exponentially-growing numbers of ill patients in real-time, educate the public on facts vs myths, and guide individuals to locate in-demand supplies they may need.

## Join our Discord Server

https://discord.gg/pPERUuv

## VIEW [CONTRIBUTING](./CONTRIBUTING.md) TO ONBOARD, RUN APPLICATION LOCALLY OR IN QA

## We are in crisis and we need to act

The COVID-19 outbreak is a threat to the global population with formidable challenges to the health system. Social distancing measures and telemedicine have been established to mitigate clinic burden and reduce additional spread. The behavior of the general public plays an important part in effectively fighting the outbreak and in improving the situation for persons that need medical care. There is a pressing need to provide accurate information and appropriate suggestions to the general population in order to avoid causing overburden of hospitals across the globe.

After discussions with doctors, start ups, technologists, an academic researchers, we narrowed down some issues of critical importance that the application will address. There are several key facets of concern, namely <b>medical considerations</b> (i.e. people aren't realizing the severity of this; it's getting real very fast; and doctors/medical professionals are ill-equipped to test for this), as well as <b>global concerns</b> (i.e. the economy is sinking; resources are directly needed for equipment like isolation rooms and protective gear; there is a need for more ventilators and space; schools are closing; etc.). Furthermore, the effects of social distancing and isolation and the impact of lost jobs and finances is already having a negative impact on the physical, mental, emotional, and spiritual well-being of our society. After learning all of this, we realized that there's a limited amount of time to act, and decisive action must be taken in order to do our part and help our neighbors and healthcare professionals on the ground working towards a solution, keeping people as healthy as possible, and strengthening the well being of our society.

(The initial plan was developing a EHR, but this is too ambitious in scope and unecessary. However [@BrianHHough took down some great notes](https://docs.google.com/document/d/15DekMbBnLjWSk_hAQclLzTFBCYygyeMGkGknJrBHnnM/edit?usp=sharing) that @SomeMoosery and @tesla809 will add to.)

## Install, Build and Run Locally (For OSX, Windows Documentation Coming Soon)

### TL;DR FAQ

A high level basic case for the project.

**Who is the app for?**

This app is for the global population going through this crisis: those who are feeling generally well, but are concerned they may be carrying COVID-19 or are showing early symptoms.

**What will it do?**

This app aims to educate on the virus and COVID-19 and allow users to track their well being and health.

**Who are the stake holders?**

- All individuals. This affects all society
- Public health authorities. They need to inform, educate, and support citizens.
- Researchers. There are enormous implications for an individual's wellbeing and health. Understanding how 1) individuals are self-caring on a day-by-day basis and 2) if education is postively impacting metrics in user's health/wellbeing chart.

**What are the actionable items that can be done by the app for users?**

- Education on the virus and the disease.
- Information regarding population characteristics of users and relative measures to understand others are experiencing the same.
- Health chart for providiing a sort of diary for logging their journey.

**What is the benefit to the user?**

- Understanding the crisis and hopefully reducing uneeded anxiety
- Awareness that others are in the same boat.

## Stack

**Frontend:**  
React
Redux
Material-UI- for all new components

**"Backend"/DB:**  
Blockstack Platform (Radiks, Gaia)

**Testing:**  
Jest

**Deprecated Technologies**
React-Bootstrap (used in old components which need to be converted to Material-UI.)

## Questions Related to Stack?

**Reach-out:**  
**@SomeMoosery** is implementing backend with blockstack, front end, systems architecture.  
See [/design/backend](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design), [/design/models](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design/database_models), and [/client](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/client)  
(@Carter Klein on discord)

**@Brian H. Hough** is implementing design, social media marketing, front end code.  
See [/design](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design) and [/design](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/design/wireframes)
(@InterstellarX on discord)

**@tesla809** is implementing front end code, documentation and booking meetings with experts.  
Open to peer program any issue or bugs!  
See [/client](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/client)  
(@Anthony A. on discord)

**@akilhylton** is implementing front end code, documentation, has machine learning experience.  
Open to peer program any issue or bugs!  
See [/client](https://github.com/COVID-19-electronic-health-system/Corona-tracker/tree/master/client)  
(@Akil Hylton on discord)

**@ngiangre** is advising on data model, analytics, data science  
See [analytics thread](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues/51)  
(@NickG on discord)

**@salvolpe** is helping with translations, analytics  
(@laseplov on discord)  
See [translations.md](translations.md)

**@lukelin1991** Managing discord, discord roles, front-end, translations.
(@kirbypooh on discord)

And YOU!  
How would you like to help?  
see [CONTRIBUTING.md](./CONTRIBUTING.md) PENDING

## Questions?

Submit an [issue](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues). Issues are welcomed! We are new developer friendly and happy to help in anyway!
Message @Anthony A. on the [discord](https://discord.gg/pPERUuv) if you have any questions!

### Design considerations

**CSS Design considerations**
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

### A Note on Blockstack, Privacy

In these strange and often trying times, individual privacy is of utmost concern. In order to bootstrap this tool and get it off the ground and into the hands of those in need as quickly as possible, a serverless approach works great. While providers like AWS and Azure are great for this, trust in these services to handle large amounts of very personal information will decrease. Blockstack is decentralized - individuals still own their information. Therefore, we felt it best suited the overall needs.

## Key Feature of the App for an IPR: Health Log

- Rate your symptoms: Put in certain info &#8594; visualization of info and who to reach out to
  - Dashboard for doctor w/ color gradient ordered by people getting worse (could use OSS, Creative Tim for this)
    - Reds are getting worse
    - Greens getting better
- Doctors are able to download a list of patients and their symptoms from the dashbaord

# Research and notes from the 3/13 call:

## To decrease the peak of the curve

- **Everyone** needs to stay home (kids to elderly)
  - This is a new disease
  - Anyone can be a carrier of this
  - We all are at risk as a population
  - If you leave the house, you're immediately at risk
  - Is our community/society going to be ok? - Life is different as of today → this message not being taken seriously
- Already 25 strains?
  - A couple of these believed causing pneumonia, upper respiratory infection and death
  - Other strains, less virulent
  - But we don’t have testing for this right now. Now is too late.
  - We don't know why the mortality rate is higher amongst older individuals
- CDC is not doing enough -- the people who would have been in charge were let go
- Not enough gear, ventilators, etc
  - At this point, you won't be tested unless you're about to die (or you're famous)
- We don’t have a treatment, we don’t have a cure, this is going to spread **exponentially**.
- NEED the experts involved
  - In this social media-driven time, everyone is an "expert" &#8594; we need to distinguish these "experts from real EXPERTS!
  - People that aren't true experts are willing to help, and that's great. But, we need to channel this drive to help into more useful applications than spreading panci and false information.
- Media outlets are going to be inherently behind the boots-on-the-ground professionals seeing COVID-19's effects and spread
  - There will be things going on that the media will not know about, or won't report on
  - Another reason to not trust social media "experts" with regards to this disease, but trust true professional experts

## Feature suggestions:

- What we need is more information about where resources should be prioritized
  - NY already doing this - monitoring what is being bought at drug stores (if surge, more people buying cough/cold medicine...when there’s increase in medical visits)
  - We don’t have real information about this and don’t have infrastructure to figure it out
  - **Could implement a Waze-type crowdsourcing model where individuals report "there's Tylenol here" or "there's soap there", allowing this information to be open, real-time, and available**
- We need to start thinking about the future of this:
  - Telemedicine: great access to care, f
  - Teleschooling
- Resources inventory (this ties into bullet point 2)
- **Social/Medical Symptom-Rating & Doctor Triage** &#8594; **This seems to be the most prominent idea**
  - Rate your symptoms 1-10
  - Is this like yesterday: better, worse or the same - Are you short of breath? - Are you coughing? - Fever? - Are you dizzy? - Headache? How long has headache persisted for? (
  - Work with medical professionals, real experts, in order to come up with a set of criteria/questions to ask
  - Do you have food at home?
  - Way to stay warm/cold in the winter/sumer
  - Soap, food, water, groceries do you need help going to the bathroom (elderly people falling down)
  - **relay this back to a physician so they can see indicators/thresholds so can see how people are doing** - People that aren’t doing well...do a telemedicine visit, call them, reach out - Allows doctors to triage who is is most in need of attention, in order to not clog up the pipeline

## What’s out there:

- CDC has a coronavirus app
- Telemedicine platforms already have these features too
  - Only 40% of people who needed critical care for coronavirus had a fever

## Technology they’re using now:

- N95 masks - being stolen
- Telemedicine: going up 10x up
- Must be hippa compliant
