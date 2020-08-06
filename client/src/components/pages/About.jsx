/* eslint-disable no-unused-vars */
/* eslint-disable global-require */

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  CodivId,
  AdvisoryBoard,
  GlobalHack,
  Decrypt,
  HackQuarantine,
} from "../../utils/imgUrl";
import { Trans } from "react-i18next";

// TODO add once we get it :)
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(12),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(3, 0, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(2),
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "2em",
  },
}));

export const cards = [
  {
    id: 1,
    title: (
      <Trans i18nkey="aboutSection.text.titleCodeVsCovidCard.winnerCodevscovid19" />
    ),
    about: (
      <Trans i18nkey="aboutSection.text.descriptionCodeVsCovidCard.coronatrackerPlacedInTheTop20OutOfOver300TeamsInHackzurichSCodevscovid19" />
    ),
    img: CodivId,
    link: "https://codevscovid19.devpost.com/",
  },
  {
    id: 2,
    title: (
      <Trans i18nkey="aboutSection.text.titleAdvisoryBoardCard.advisoryBoard" />
    ),
    about: (
      <Trans i18nkey="aboutSection.text.descriptionAdvisoryBoardCard.ourAdvisoryBoardConsistsOfAHealthTechCfoEpidemiologistPulmonaryCriticalCareSpecialistSystemsArchitectNeuropsychologistAndEmergencyRoomDoctor" />
    ),
    img: AdvisoryBoard,
    link: "https://coronatracker.me/leadership",
  },
  {
    id: 3,
    title: (
      <Trans i18nkey="aboutSection.text.titleGlobalHackCard.winnerGlobalHack" />
    ),
    about: (
      <Trans i18nkey="aboutSection.text.descriptionGlobalHackCard.coronatrackerPlacedInTheTop89WinnersOutOfOver1500TeamsInFacebookSGlobalHack10" />
    ),
    img: GlobalHack,
    link: "https://covid-global-hackathon.devpost.com/",
  },
  {
    id: 4,
    title: <Trans i18nkey="aboutSection.text.titleDecryptCard.decrypt" />,
    about: (
      <Trans i18nkey="aboutSection.text.descriptionDecryptCard.coronatrackerWasFeaturedInAnExclusiveArticleOnDecryptALeadingBlockchainNewsPublication" />
    ),
    img: Decrypt,
    link:
      "https://decrypt.co/25951/new-blockchain-app-tracks-covid-19-symptoms-reduce-hospital-overload",
  },
  {
    id: 5,
    title: (
      <Trans i18nkey="aboutSection.text.titleHackQuarantineCard.winnerHackQuarantine" />
    ),
    about: (
      <Trans i18nkey="aboutSection.text.descriptionHackQuarantineCard.coronatrackerWonBestUseOfBlockstackInHackQuarantine" />
    ),
    img: HackQuarantine,
    link: "https://hackquarantine.devpost.com/",
  },
];

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                <Trans i18nkey="aboutSection.text.title.forTheCommunityByTheCommunity" />
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="textSecondary"
                paragraph
              >
                <Trans i18nkey="aboutSection.text.description.coronatrackerIsAnEasyToUsePrivateByDesignOpenSourceApplicationForMonitoringYourHealthAndStayingInformedDuringTheCovid19CrisisHereSWhatWeVeAccomplishedSoFar" />
              </Typography>
            </Container>
          </div>
          <Link
            className={classes.color}
            href="https://forms.gle/PrD1QY2z3a7htB5W9"
            color="inherit"
          >
            <Trans i18nkey="aboutSection.text.betaSurvey.takeOurBetaSurvey" />
          </Link>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Link href={card.link}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.img}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="h2"
                        >
                          {card.title}
                        </Typography>
                        <Typography variant="body2">{card.about}</Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            <Trans i18nkey="aboutSection.text.footerSupportUs.supportUs" />
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            component="p"
          >
            <Trans i18nkey="aboutSection.text.footerMadeWith.starOurGithubFillOutOurUserSurveyAnythingCountsCoronatrackerIsMadeWith\u2764\ufe0fInNycAndAcrossTheGlobe" />
          </Typography>
          {/* <Copyright /> */}
        </footer>
      </Grid>
    </div>
  );
};

export default About;
