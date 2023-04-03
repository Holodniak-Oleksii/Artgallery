import { SpacesService } from '@/services/spaces';
import Spaces from '@/modules/spaces';
import Meta from '@/components/meta';

export const getStaticProps = async () => {
  const all = await SpacesService.getSpaces();
  return {
    props: {
      all,
    },
    revalidate: +process.env.REVALIDATE,
  };
};

export default (props) => {
  return (
    <>
      <Meta title="SPACES" />
      <Spaces data={props.all} />
    </>
  );
};
