import Layout from '../components/Layout';
import ShareFab from '../components/ui/ShareFab';
import ShareImage from '../components/ui/ShareImage';

export default function Share() {
  return (
    <>
      <ShareImage />
      <ShareFab />
    </>
  );
}

Share.getLayout = (page) => <Layout>{page}</Layout>;
