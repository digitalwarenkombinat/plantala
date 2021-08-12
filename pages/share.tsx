import React from 'react';
import Layout from '../components/Layout'
import AvatarList from '../components/ui/AvatarList'
import ItemList from '../components/ui/ItemList';
import SelectFab from '../components/ui/SelectFab'

export default function Share() {
  return (
    <>
      <AvatarList />
      <ItemList />
      <SelectFab />
    </>
  );
}

Share.getLayout = (page) => (
  <Layout>{page}</Layout>
)
