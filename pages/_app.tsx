import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';

import theme from '../components/theme';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Plantala | Digitalwarenkombinat</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Malen! Strahlen! Plantala! - Erstelle individuelle Mandalas aus historischen Pflanzendarstellungen."
        />
        <link rel="preload" href={`${process.env.pathPrefix}/fonts/GinoraSans.otf`} as="font" crossOrigin="" />
        <link rel="preload" href={`${process.env.pathPrefix}/fonts/Magilio.otf`} as="font" crossOrigin="" />
        <link rel="icon" href={`${process.env.pathPrefix}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${process.env.pathPrefix}/icon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${process.env.pathPrefix}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${process.env.pathPrefix}/manifest.webmanifest`} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
