/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { data } from './data' ;

const hero = {
  title: 'Malen! ',
  description: 'Mandalas als ästhetischer und spielerischer Einstieg in die Pflanzenkunde',
};

const isNewData = data.images.length > 1;
const itemPath = isNewData ? '' : 'plants/';
const items = isNewData
? data
: {
      images: [
        {
          name: 'Kelchsaum der Erdnusspflanze',
          source: 'Arachis_hypogaea_Linné_Erdnuss_Ausschnitt.png',
          description: 'ursprünglich aus den Anden; die ältesten Funde sind 5000 Jahre alt',
          link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_461334/1/',
          wiki: 'https://de.wikipedia.org/wiki/Erdnuss',
        },
        {
          name: 'Samen des Kretischen Tragant',
          source: 'Astragalus_creticus_Lam. _Cretischer_Traganthstrauch_Ausschnitt.png',
          description: 'wächst auf Kreta; bildet dornige Polster',
          link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_459303/1/',
          wiki: 'https://de.wikipedia.org/wiki/Tragant',
        },
        {
          name: 'Ähren des Bambusrohrs',
          source: 'Bambusa_arundinacea_Willd. _Gemeines_Bambusrohr_Ausschnitt.png',
          description: 'wächst vor allem in den (Sub-)Tropen vor; 150 Arten weltweit',
          link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_463210/1/',
          wiki: 'https://de.wikipedia.org/wiki/Bambusa',
        },
        {
          name: 'Frucht des Karitébaums',
          source:
            'Butyrospermum_Parkii_Kotschy,_Illipe_latifolia_Engler_Afrikanischer_Butterbaum,_Mahwabaum_Ausschnitt.png',
          description: 'kommt in den Savannen südlich der Sahara vor; Früchte sind Quelle für Sheabutter',
          link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_461349/1/',
          wiki: 'https://de.wikipedia.org/wiki/Karit%C3%A9baum',
        },
        {
          name: 'Blütenboden der Kautschukliane',
          source: 'Landolphia_comorensis,_var._florida_K._Schumann _Schönblühende_Kautschukliane_Teil3_Ausschnitt.png',
          description: 'verbreitet in den Tropen Afrikas und Madagaskars; verletzte Rinde sondert Kautschuk ab',
          link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_461359/1/',
          wiki: 'https://de.wikipedia.org/wiki/Rauvolfioideae',
        },
        {
          name: 'Blumenkrone des Spanischen Pfeffers',
          source: 'Capsicum_longum_DC._Spanischer_Pfeffer_I_Ausschnitt.png',
          description: 'stammt aus Mittel- und Südamerika; Pepperoni, Chili und Paprika gehören zu dieser Art',
          link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_459298/1/-/',
          wiki: 'https://de.wikipedia.org/wiki/Spanischer_Pfeffer',
        },
        {
          name: 'Papayafrucht',
          source: 'Carica_Papaya_Linné_Melonenbaum_Ausschnitt.png',
          description: 'kommt in Süd- und Mittelamerika vor; Samen wurden früher zur Entwurmung eingesetzt',
          link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_461346/1/',
          wiki: 'https://de.wikipedia.org/wiki/Papaya',
        },
      ],
    };

const avatarCount = 3;

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
  },
  heroContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  plantAvatar: {
    borderColor: theme.palette.info.main,
    borderWidth: 2,
    borderStyle: 'solid',
    margin: '0.5rem',
    height: '3rem',
    width: '3rem',
    [theme.breakpoints.up('sm')]: {
      height: '4em',
      width: '4em',
    },
  },
  heroButton: {
    color: '#fff',
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Paper className={classes.hero}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.heroContent}>
            <Typography variant="h3" gutterBottom>
              {hero.title}
            </Typography>
            <Typography variant="h5" paragraph>
              {hero.description}
            </Typography>
            <Button variant="contained" size="large" className={classes.heroButton}>
              Start
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="column">
        {items.images.slice(0, avatarCount).map((plant) => (
          <Grid key={plant.name} item container alignItems="center">
            <Avatar
              key={plant.name}
              alt={plant.name}
              src={`/images/${itemPath}${plant.source}`}
              className={classes.plantAvatar}
            />
            <Typography variant="h6" gutterBottom>
              {plant.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
