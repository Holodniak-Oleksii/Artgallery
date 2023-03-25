import { SpacesService } from '@/services/spaces';
import Details from '@/modules/detail';
import Meta from '@/components/meta';

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
    revalidate: false,
  };
};

export default (props) => (
  <>
    <Meta title={props.details.name} />
    <Details data={props.details} />
  </>
);
