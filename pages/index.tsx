import Layout from '../components/Layout';
import StartBanner from '../components/ui/StartBanner';
import StartFab from '../components/ui/StartFab';
import StartImage from '../components/ui/StartImage';

export default function Index() {
  return (
    <>
      <StartBanner />
      <StartImage />
      <StartFab />
    </>
  );
}

Index.getLayout = (page) => <Layout>{page}</Layout>;
