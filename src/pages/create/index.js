import Meta from '@/components/meta';
import withAuth from '@/helpers/withAuth';
import Create from '@/modules/create';

const CreatePage = () => (
  <>
    <Meta title="Create Art" />
    <Create />
  </>
);

export default withAuth(CreatePage);
