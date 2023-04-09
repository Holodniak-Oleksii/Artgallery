import { SpacesService } from '@/services/spaces';
import Spaces from '@/modules/spaces';
import Meta from '@/components/meta';

export const getServerSideProps = async ({ query }) => {
  const category = query.category || 'all';
  const search = query.search || '';

  const all = await SpacesService.filterSpace({ category, search });
  return {
    props: {
      all,
      category,
      search,
    },
  };
};

export default (props) => {
  return (
    <>
      <Meta title="SPACES" />
      <Spaces
        data={props.all}
        categoryData={props.category}
        searchData={props.search}
      />
    </>
  );
};
