import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import SelectBanner from '../components/ui/SelectBanner';
import SelectFab from '../components/ui/SelectFab';

const DynamicAvatarSelection = dynamic(() => import('../components/ui/AvatarSelection'), { ssr: false });

const DynamicItemList = dynamic(() => import('../components/ui/ItemList'), { ssr: false });

export default function Select() {
  return (
    <>
      <SelectBanner />
      <DynamicAvatarSelection />
      <DynamicItemList />
      <SelectFab />
    </>
  );
}

Select.getLayout = (page) => <Layout>{page}</Layout>;
