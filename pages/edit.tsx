import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import EditBanner from '../components/ui/EditBanner';
import EditFab from '../components/ui/EditFab';

const DynamicAvatarEdit = dynamic(() => import('../components/ui/AvatarEdit'), { ssr: false });

const DynamicMandala = dynamic(() => import('../components/ui/Mandala'), { ssr: false });

export default function Edit() {
  return (
    <>
      <EditBanner />
      <DynamicAvatarEdit />
      <DynamicMandala />
      <EditFab />
    </>
  );
}

Edit.getLayout = (page) => <Layout>{page}</Layout>;
