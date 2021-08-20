import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import EditFab from '../components/ui/EditFab';
import Mandala from '../components/ui/Mandala';

const DynamicAvatarList = dynamic(() => import('../components/ui/AvatarList'), { ssr: false });

export default function Edit() {
  return (
    <>
      <DynamicAvatarList />
      <Mandala />
      <EditFab />
    </>
  );
}

Edit.getLayout = (page) => <Layout>{page}</Layout>;
