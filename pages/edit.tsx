import React from 'react';
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
//import AvatarList from '../components/ui/AvatarList'
import Mandala from '../components/ui/Mandala'
import EditFab from '../components/ui/EditFab'

const DynamicAvatarList = dynamic(
  () => import('../components/ui/AvatarList'),
  { ssr: false }
)

export default function Edit() {
  return (
    <>
      <DynamicAvatarList />
      <Mandala />
      <EditFab />
    </>
  );
}

Edit.getLayout = (page) => (
  <Layout>{page}</Layout>
);
