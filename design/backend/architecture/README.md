# Architecture Design

## Design for what we want the end-state architecture (at least for V2-V3) to look like

We may have to flesh this out or break out our generic backend server into a more microservices-style architecture once we start implementing more data analysis-type features 

This also is a very high-level overview of the AWS architecture we will likely end up using. Not accounted for here are things like public/privat subnets, CDN, etc...

As of 3/19/20, 10:30PM: 

![Current Design](images/final-state-architecture.png?raw=true "Current Design")

## QA Environment

Our QA Environment for the time being is very bare-bones, and could certainly be made more robust and secure with additional funding. Currently running on both **@SomeMoosery**'s MongoDB Atlas and AWS accounts. 

![Current Design](images/qa.png?raw=true "Current Design")
