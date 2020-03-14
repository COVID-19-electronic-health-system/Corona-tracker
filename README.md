# Corona-tracker
A registry to help doctors track the symptoms of large amounts of patients real time with a dashboard.


## Abstract
After chatting with the ER doctor and Systems Architect on March 13th 2020, we scoped down some issues of critical importance to this. There are severla key facets of concern, namely <b>medical concerns</b> (i.e. people aren't realizing the severety of this; it's getting real very fast; and doctors/medical professionals are ill-equipped to test for this), as well as <b>global concerns</b> (i.e. the economy is sinking; resources are needed like isolation rooms and gear; there is a need for more ventilators and need more space; schools are closing; etc.). After hearing all of this, we learned that there's a limited amount of time to act and we need to take decisive action to do our part and help the health professionals on the ground working on a solution and/or keeping people as healthy as possible.

And EHR is too ambitious in scope. However [@BrianHHough took down some great notes](https://docs.google.com/document/d/15DekMbBnLjWSk_hAQclLzTFBCYygyeMGkGknJrBHnnM/edit?usp=sharing) that @SomeMoosery and @tesla809 will add to.

There are various ideas that people can choose from there.

However, we are looking towards creating this repo that is do-able and useful according to the ER doctor.


## Idea
The idea is to help doctors monitor large numbers of patient's symptoms over time (daily or less). Text them if they are feeling ok, or call them if they start to get worse. Or refer them to telemedicine service like Jamaica Hospital or other.

We will scope it out to creating a dashboard and a survey that people update daily with information.

In a few words or less, this will *"track and reduce symptoms of COVID-19."*


## UX/UI
Dashboard (we can find a free one from Creative Tim) or open source version.
A survey screen.
Geolocation (?)


## Privacy
We have to address privacy issues. Perhaps use blockstack?


## Stack
React, Redux (?), MongoDB, CSS-in-JS


## Key Features of the app:
- Dashboard for doctor w/ color gradient ordered by people getting worse
- Reds are getting bad
- Green getting better
- Crowdsourcing info of where stuff is - 3rd party plugins


## App MVPs
- Notifies you when you leave
- Rating your systems: Put in certain info: visualization of info + who to reach out to
    - Dashboard for doctor w/ color gradient ordered by people getting worse
          - Reds are getting bad
          - Green getting better
    - Crowdsourcing info of where stuff is - 3rd party plugins
- Telemedicine - once you have enough people, refer them
- Food delivery thing
- Inventory resource tracker
- Resources around you



# Research and notes from the 3/13 call:

## To decrease the peak of the curve
- Everyone needs to stay home (kids to elderly)
    - This is a new disease
    - Anyone can be a carrier of this
    - We all are at risk as a population
    - Is our community/society going to be ok?
          - Life is different as of today → this message not being taken seriously
- Already 25 strains? 
    - A couple of these believed causing pneumonia, upper respiratory infection and death
    - Other strains, less virulent
    - But we don’t have testing for this right now. Now is too late.
- CDC is not doing enough -- the people who would have been in charge were let go
- Not enough gear, ventilators, 
- We don’t have a treatment, we don’t have a cure, this is going to spread.
- NEED the experts involved


## Feature suggestions:
- If you leave the house, it warns you?
    - Timer?
- What we need is more information about where resources should be prioritized
    - NY already doing this - monitoring what is being bought at drug stores (if surge, more people buying cough/cold medicine...when there’s increase in medical visits)
    - We don’t have real information about this and don’t have infrastructure to figure it out
- We need to start thinking about the future of this:
    - Telemedicine: great access to care, f
    - Teleschooling 
- Resources inventory
- Rate your symptoms - social and symptoms
    - Rate your symptoms 1-10
    - Is this like yesterday: better, worse or the same
          - Are you short of breath?
          - Are you coughing?
          - Fever?
          - Are you dizzy?
          - Headache? How long has headache persisted for? (
    - Do you have food at home?
    - Way to stay warm/cold in the winter/sumer
    - Soap, food, water, groceries do you need help going to the bathroom (elderly people falling down)
    - ***relay this back to a physician so they can see indicators/thresholds so can see how people are doing
          - People that aren’t doing well...do a telemedicine visit, call them, reach out


## What’s out there:
- CDC has a coronavirus app
- Telemedicine platforms already have these features too
    - Only 40% of people who needed critical care for coronavirus had a fever


## Value proposition: 
- Timer for when you're out of the house /// how long it'd take you to get home
- Resource inventory (supply chain of resources)? 
- Bed tracker so everything is connected
- Staff communications is lacking (problem from the top) 
- Doctors able to download list of patients and their symptoms
- Walmart model for Food (Walmart Labs) -- blockchain
    - Problem: polluting food or food with illness -- used to take weeks to check through bananas
    - Solution: put the whole tracking operations on blockchain (now minutes)


## Technology they’re using now:
- N95 masks - being stolen
- Telemedicine: going up 10x up
- Must be hippa compliant

