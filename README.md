# Corona-tracker
[![Build Status](https://travis-ci.org/COVID-19-electronic-health-system/Corona-tracker.svg?branch=master)](https://travis-ci.org/COVID-19-electronic-health-system/Corona-tracker)

A tool to both help doctors track triage an exponentially-growing number of patients in real-time, and lead individuals to essentials they may need.

## Join our Discord Server
https://discord.gg/pPERUuv

## Abstract
After chatting with the ER doctor and Systems Architect on March 13th 2020, we scoped down some issues of critical importance to this. There are several key facets of concern, namely <b>medical concerns</b> (i.e. people aren't realizing the severety of this; it's getting real very fast; and doctors/medical professionals are ill-equipped to test for this), as well as <b>global concerns</b> (i.e. the economy is sinking; resources are needed like isolation rooms and gear; there is a need for more ventilators and need more space; schools are closing; etc.). After hearing all of this, we learned that there's a limited amount of time to act and we need to take decisive action to do our part and help the health professionals on the ground working on a solution and/or keeping people as healthy as possible.

And EHR is too ambitious in scope. However [@BrianHHough took down some great notes](https://docs.google.com/document/d/15DekMbBnLjWSk_hAQclLzTFBCYygyeMGkGknJrBHnnM/edit?usp=sharing) that @SomeMoosery and @tesla809 will add to.

## TL;DR FAQ
A high level basic case for the project. 

**Who is the app for?**

This app is for the largest percentage of individuals going through this crisis: those who are still feeling generally well, but are concerned they may be carrying COVID-19 or are showing early symptoms.

**What will it do?**

This app aims to track the symptoms of individuals who fear they may have early symptoms of COVID-19, alerting doctors only if they are likely to have been infected with the virus based on the trajectory of their health. Once a user is flagged as high-risk, they are directed to either a face-to-face medical professional, or redirected to a telehealth service.

**Who are the all the stake holders/actors?**

- Individuals feeling generally unwell: This will be the majority user base of this application. These are the people whose health we are monitoring.
- Doctors: in a time where doctors nationwide are being stretched thin and generally healthy individuals are clogging up visitations, an effective way to triage patients is crucial. This will allow doctors to treat those only in true need as quickly as possible.

**What are their views (doctor view vs patient view)?**

- The patient will be asked to fill out a survey in order to monitor their health. They will then be able to view an overall summary of their health status, and a detailed, checkup-by-checkup view.
    - [FUTURE STATE]: the patient will also have access to COVID-19-related news, the ability to directly reach out to telehealth services, and a crowdsourced map of stores that have certain supplies. 
- The doctor will see an aggregated list of patients, sorted by severity of cases. 

**What are the actionable items that can be done by the app user?**

- [PATIENT]: Fill out the health-monitoring survey
- [PATIENT]: View their overall health, and a more fine-grained checkup-by-checkup view
- [DOCTOR]: View an aggregated of patients' health sorted by severity
- [DOCTOR]: Reach out to patients, either encouraging them to come in for a test if the case is bad enough, or ease their nerves by ensuring them they're still fine.
- [FUTURE STATE]: Read COVID-19-related news
- [FUTURE STATE]: Directly interact with telehealth services
- [FUTURE STATE]: View a map of necessary goods in your area
- [FUTURE STATE]: Input where necessary goods are in your area

**What is the benefit?**

Doctors will no longer be bogged down with patients who are showing few-to-none health issues (oftentimes unrelated to symptoms of COVID-19), potentially leaving those who are at risk or even already infected with the virus sitting in the waiting room infecting others. This allows doctors to better triage patients and provide care to those who truly need it most.

**Who does the app add value for?**

- Doctors: for all the reasons stated above. They are better able to triage patients, provide better care, and not become bogged down by entirely healthy-but-rightfully-paranoid individuals
- Patients: by keeing a log of your health, this allows the patient to either keep their mind at ease that they're still okay, _or_ unfortunately alert them that they are in need of medical attention.

## Idea
The idea **for our IPR** is to help doctors monitor large numbers of patients' symptoms over time (daily or less). Doctors can text the patients if the patients are still ok, or call the patient if they start to get worse. Or, as time goes on, the doctor can refer them to telemedicine service like Jamaica Hospital or other. This will ultimately manifest itself as, mainly, a dashboard and a survey that people update daily with information.

After that, we hope to add additional features, such as a Waze-like crowdsourced map indicating where essentials people may desperately need are in stock (soap, nonperishables, toilet paper, etc)

In a few words or less, this will **_"alleviate stressors caused by COVID-19 and reduce doctor overhead."_**

## Stack
**Frontend:** React, React Bootstrap

**"Backend"/DB:** Blockstack Platform (Radiks, Gaia)

### Design considerations
**CSS Design considerations**
We have decided to use regular CSS files to keep things simple for now. This allows for more contributors and less time to upskill to contribute.

Once MVP is done the team can discuss if we want to transition it to styled-components or something like CSS modules.

**Folder paths**
CSS is located in /client/src/css. 
Components are located in /client/src/components. 

**Style guide for CSS files:**
Use /client/src/css/themePalette.css and its classes to style the components.
Then add your custom css file after that. Remember that css cascades and overrides. So, add the themePalette.css, first then the component's css file.

**Naming convention:**
Component -> Sample.js. 
CSS file -> Sample.css. 
Reducer -> sampleReducer.js. 

**To avoid naming collisions:**  
prefix class names with the name of component and link with kebab case.  
Class name -> .Sample-header { ... }. 

**How to handle state:**
Let's use Redux.
Create action and reducer with an appropriate name.
Add them to the /actions and /reducers folder.

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

### Additional Features Post-IPR
1. Crowdsourced Resource Mapping
    - Resources around you
    - Crowdsourcing info of where essentials (Tylenol, non-perishables, soap, etc) are using 3rd party plugins (like Mapbox)
2. Notification service for you when you leave the house (to emphasize the importance of social distancing)
    - **Potential:** A timer to recommend how long you should be out of the house
3. Telemedicine service (if there are enough people in red, refer them to partnering telemedicine services)

### Stretch / Fuzzy Goals
4. Safe food delivery thing
5. Resource Onventory (supply chain of resources)? 
- Walmart model for Food (Walmart Labs) -- blockchain
    - Problem: polluting food or food with illness -- used to take weeks to check through bananas
    - Solution: put the whole tracking operations on blockchain (now minutes)
6. Bed tracker so everything is connected
- Staff communications is lacking (problem from the top, but tech can help alleviate it) 

# Research and notes from the 3/13 call:
## To decrease the peak of the curve
- **Everyone** needs to stay home (kids to elderly)
    - This is a new disease
    - Anyone can be a carrier of this
    - We all are at risk as a population
    - If you leave the house, you're immediately at risk
    - Is our community/society going to be ok?
          - Life is different as of today → this message not being taken seriously
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
    - Is this like yesterday: better, worse or the same
          - Are you short of breath?
          - Are you coughing?
          - Fever?
          - Are you dizzy?
          - Headache? How long has headache persisted for? (
    - Work with medical professionals, real experts, in order to come up with a set of criteria/questions to ask
    - Do you have food at home?
    - Way to stay warm/cold in the winter/sumer
    - Soap, food, water, groceries do you need help going to the bathroom (elderly people falling down)
    - **relay this back to a physician so they can see indicators/thresholds so can see how people are doing**
          - People that aren’t doing well...do a telemedicine visit, call them, reach out
          - Allows doctors to triage who is is most in need of attention, in order to not clog up the pipeline

## What’s out there:
- CDC has a coronavirus app
- Telemedicine platforms already have these features too
    - Only 40% of people who needed critical care for coronavirus had a fever

## Technology they’re using now:
- N95 masks - being stolen
- Telemedicine: going up 10x up
- Must be hippa compliant

