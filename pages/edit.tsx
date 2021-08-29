import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import EditFab from '../components/ui/EditFab';

const DynamicAvatarList = dynamic(() => import('../components/ui/AvatarList'), { ssr: false });

const DynamicMandala = dynamic(() => import('../components/ui/Mandala'), { ssr: false });

export default function Edit() {
  return (
    <>
      <DynamicAvatarList />
      <DynamicMandala />
      <EditFab />
    </>
  );
}

Edit.getLayout = (page) => <Layout>{page}</Layout>;
