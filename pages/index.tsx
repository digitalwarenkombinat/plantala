import React from 'react';
import Layout from '../components/Layout'
import StartBanner from '../components/ui/StartBanner'
import StartImage from '../components/ui/StartImage'
import StartFab from '../components/ui/StartFab'

export default function Index() {
  return (
    <>
      <StartBanner />
      <StartImage />
      <StartFab />
    </>
  );
}

Index.getLayout = (page) => (
  <Layout>{page}</Layout>
)
