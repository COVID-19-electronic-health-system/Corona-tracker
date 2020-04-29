/* eslint-disable no-unused-vars */
/* eslint-disable global-require */

import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CodivId, AdvisoryBoard, GlobalHack, Decrypt, HackQuarantine } from '../utils/imgUrl';

// TODO add once we get it :)
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '15em',
    },
    paddingBottom: '10em',
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(2),
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '2em',
  },
}));

export const cards = [
  {
    id: 1,
    title: 'Winner: CodeVsCOVID-19',
    about: `CoronaTracker placed in the Top 20 out of over 300 teams in HackZurich's CodeVSCOVID-19`,
    img: CodivId,
    link: 'https://codevscovid19.devpost.com/',
  },
  {
    id: 2,
    title: 'Advisory board',
    about:
      'Our advisory board consists of a health-tech CFO, epidemiologist, pulmonary critical care specialist, systems architect, neuropsychologist and emergency room doctor',
    img: AdvisoryBoard,
    link: 'https://coronatracker.me/leadership',
  },
  {
    id: 3,
    title: 'Winner: Global Hack',
    about: `CoronaTracker placed in the Top 89 Winners out of over 1500 teams in Facebook's Global Hack 1.0`,
    img: GlobalHack,
    link: 'https://covid-global-hackathon.devpost.com/',
  },
  {
    id: 4,
    title: 'Decrypt',
    about: `CoronaTracker was featured in an exclusive article on Decrypt, a leading blockchain news publication`,
    img: Decrypt,
    link: 'https://decrypt.co/25951/new-blockchain-app-tracks-covid-19-symptoms-reduce-hospital-overload',
  },
  {
    id: 5,
    title: 'Winner: Hack Quarantine',
    about: `CoronaTracker won "Best Use of Blockstack" in Hack Quarantine`,
    img: HackQuarantine,
    link: 'https://hackquarantine.devpost.com/',
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
              <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                For the community, by the community
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                CoronaTracker is an easy-to-use, private-by-design, open-source application for monitoring your health
                and staying informed during the COVID-19 crisis. Here&apos;s what we&apos;ve accomplished so far
              </Typography>
            </Container>
          </div>
          <Link className={classes.color} href="https://forms.gle/PrD1QY2z3a7htB5W9" color="inherit">
            Take our Beta Survey!
          </Link>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Link href={card.link}>
                    <Card className={classes.card}>
                      <CardMedia className={classes.cardMedia} image={card.img} title="Image title" />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="subtitle1" component="h2">
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
            Support Us!
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" component="p">
            Star our GitHub, fill out our user survey, anything counts! CoronaTracker is made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            in NYC and across the globe
          </Typography>
          {/* <Copyright /> */}
        </footer>
      </Grid>
    </div>
  );
};

export default About;
