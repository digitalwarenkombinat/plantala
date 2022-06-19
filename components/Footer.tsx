import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import QRCode from 'react-qr-code';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box display="none" displayPrint="block">
      <AppBar position="relative" component="footer">
        <Toolbar disableGutters className={classes.footer}>
          <img
            alt="Digitalwarenkombinat"
            src={`${process.env.pathPrefix}/images/plants/copyright.svg`}
            width={60}
            height={60}
          />
          <Typography variant="h2" component="h1">
            Digitalwarenkombinat
          </Typography>
          <QRCode value="https://digitalwarenkombinat.de/" size={60} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
