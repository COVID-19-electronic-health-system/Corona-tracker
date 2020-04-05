/* eslint-disable no-unused-vars */
/* eslint-disable global-require */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
}));

const cards = [
  {
    id: 1,
    title: 'Top 20 in CodeVsCOVID-19',
    about: `CoronaTracker has recently placed in the top 20 out of over 300 teams in HackZurich's CodeVSCOVID-19`,
    // TODO replace these required with static images in S3 after beta, remove eslint-disable tag
    img: require('../img/codevscovid.jpg'),
  },
  {
    id: 2,
    title: 'Advisory board',
    about:
      'Our advisory board consists of a health-tech CFO, epidemiologist, pulmonary critical care specialist, systems architect, neuropsychologist and emergency room doctor',
    img: require('../img/advisory-board.png'),
  },
];

const About = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              For the community, by the community
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              CoronaTracker is an easy-to-use, private-by-design, open-source application for monitoring your health and
              staying informed during the COVID-19 crisis. Here&apos;s what we&apos;ve accomplished so far
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={card.img} title="Image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.about}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Support Us!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Star our GitHub, fill out our user survey, anything counts! CoronaTracker is made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          in NYC and across the globe
        </Typography>
        {/* <Copyright /> */}
      </footer>
    </>
  );
};

export default About;
