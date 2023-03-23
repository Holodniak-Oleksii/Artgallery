import { SpacesService } from '@/services/spaces';
import Spaces from '@/modules/spaces';

export const getStaticProps = async () => {
  const all = await SpacesService.getSpaces();
  return {
    props: {
      all,
    },
    revalidate: 120,
  };
};

export default (props) => <Spaces data={props.all} />;
