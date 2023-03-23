import { SpacesService } from '@/services/spaces';
import Details from '@/modules/detail';

export const getStaticPaths = async () => {
  const all = await SpacesService.getSpaces();
  return {
    paths: all.map((space) => ({
      params: {
        id: space._id,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const details = await SpacesService.getSingleSpace(params.id);
  return {
    props: {
      details,
    },
  };
};

export default (props) => <Details data={props.details} />;
