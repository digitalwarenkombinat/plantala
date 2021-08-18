import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import SelectFab from '../components/ui/SelectFab'

const DynamicAvatarList = dynamic(
  () => import('../components/ui/AvatarList'),
  { ssr: false }
)

const DynamicItemList = dynamic(
  () => import('../components/ui/ItemList'),
  { ssr: false }
)

export default function Select() {
  return (
    <>
      <DynamicAvatarList />
      <DynamicItemList />
      <SelectFab />
    </>
  );
}

Select.getLayout = (page) => (
  <Layout>{page}</Layout>
)
