import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import ShareBanner from '../components/ui/ShareBanner';
import ShareFab from '../components/ui/ShareFab';

const DynamicMandala = dynamic(() => import('../components/ui/Mandala'), { ssr: false });

export default function Share() {
  return (
    <>
      <ShareBanner />
      <DynamicMandala />
      <ShareFab />
    </>
  );
}

Share.getLayout = (page) => <Layout>{page}</Layout>;
