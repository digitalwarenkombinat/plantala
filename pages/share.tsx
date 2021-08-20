import Layout from '../components/Layout';
import AvatarList from '../components/ui/AvatarList';
import ItemList from '../components/ui/ItemList';
import ShareFab from '../components/ui/ShareFab';

export default function Share() {
  return (
    <>
      <AvatarList />
      <ItemList />
      <ShareFab />
    </>
  );
}

Share.getLayout = (page) => <Layout>{page}</Layout>;
