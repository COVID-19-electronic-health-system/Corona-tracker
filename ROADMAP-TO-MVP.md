# ROADMAP to CoronaTracker MVP

## Goal

**Get the app MVP ready for DocMusher by May 11th, 2020.**

The sooner the better.

According to our first possible user [@DocMusher](https://www.researchgate.net/profile/Sven_Van_Poucke), time is of the essence for the first wave of the pandemic. There is a second wave expected.

## Validation

Based on a user interview with [@DocMusher](https://www.researchgate.net/profile/Sven_Van_Poucke) on Wednesday, April 29th, 2020. He is a Belgian Doctor [who is advising us](https://coronatracker.me/leadership) and WANTS to use the product. DocMusher mentioned that doctors find the trend of two metrics,  temperature and heart rate, over time useful.

We asked him what is needed for MVP. He mentioned the features below to start to use it immediately.

He urged that **time is of the essence**.

## Why these features

Product market fit via a usable MVP is needed because we want to deliver real value beyond being just a hackathon project.

DocMusher's advice is hugely important because it is from a real-world user who is informed on what they **NEED**. Insights from real-world users saves our development team's time and helps us deliver value by creating the right (needed) features to help users.

Simply put, **build something users want**. Product market fit is achieved when they NEED this, even though it is not perfect. Let's get closer to this.

## Target Audience

- Patients who know that they are at risk of being infected
- People who know others that are at risk of being infected.

### Demographic make up

1. Fragile patients, older patients, usually in their 70s that have difficulty visiting the doctor on a specific date.
   - Based on DocMusher’s experience, after the initial huge swell of younger people, the patients he is seeing are in their 70s with co-morbidities. These co-morbidities alone these are not issues but combined with COVID19 result in issues.
2. People who will be hit by the second wave.

### User's Motivation

The user lives in fear of their symptoms becoming worse. They have a scheduled followup coming up and need reassurance that things are going well.

### Value Provided

If we can help alleviate some of these issues, we have succeeded.

We provide a tool that lets you see the evolution of parameters, and based on that they can take that to the doctor and show them how things are progressing.

### Usefulness

We will NOT triage patients. We provide a tool to help patients and doctors understand the evolution of the disease if infected.

## Four things for MVP

The listed MVP features are based on the conversation with first possible user DocMusher (a Belgian doctor treating COVID19 patients).

All [related MVP issues](https://github.com/COVID-19-electronic-health-system/Corona-tracker/issues?q=is%3Aissue+is%3Aopen+label%3AMVP) can be found via the `MVP` tag in the Corona-tracker repository.

## 1. Finish Dutch (Flemish) translations

### Why are Dutch (Flemish) translations useful?

DocMusher is based in Belgium and the people he sees speak Dutch (Flemish). They are skewing to be older patients, a demographic where English is not fully spoken.

### Tasks for Dutch Translation

1. Have @DocMusher revise and make sure medical terms are correct.

2. Make sure that a Dutch-speaking legal professional reviews our privacy policies for the usage of the correct legal terms.

## 2. Feature: Daily log of temperature

### Why is the Daily Log of Temperature useful?

It is a **KEY** indicator that DocMusher stated was useful to doctors.

### Tasks for Daily Log of Temperature

1. Add some prompt to let the user know.
2. They will use a cheap regular old thermometer or anything they have.

## 3. Feature: Algorithm to take daily rate via video camera

### Why is the Daily Heart Rate useful?

Heart rate is a **KEY** indicator that in @DocMusher's experience can help assess issues with COVID-19. The reason is that the heart needs to work harder to pump and keep circulation up based on the reduce amount of fluids. Will follow up with DocMusher on a clearer description of this.

A heart monitor is not necessary. This can be achieved with a smartphone camera.

### Tasks for Daily Heart Rate algorithm

1. Create an algorithm to take a daily heart rate. This can be adjusted to more than once a day.

2. Make the code modular, not tightly coupled to CoronaTracker. This will require a separate repo for this code.

3. Import it as a library or package.

4. Work with @Akil Hylton#7927, @NickG and the analytics team on this.

### Resources for Daily Heart Rate algorithm

@Akil Hylton#7927 found a great paper

See: [Improved Algorithm for Heart Rate Measurement Using Mobile Phone Camera by Denis Laure and Ilya Paramonov from P. G. Demidov Yaroslavl State University Yaroslavl, Russia](https://www.fruct.org/publications/fruct13/files/Lau.pdf)

**Feel free to add more papers.**

## 4. Feature: Add a graph to visualize trends

### Why is a graph of trends useful?

Being able to see the trend of temperature and heart rate change over time is SUPER useful for the doctor.

### Tasks for the graph

Add a graph or some easy visual that shows **trends** of temperature and heart rate over time.

The **trend** of these two measurements is SUPER important to assess the possibility of being affected by COVID, based on @DocMusher's experience.

The **trend** is your friend.
