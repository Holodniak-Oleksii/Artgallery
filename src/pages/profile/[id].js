import withAuth from '@/helpers/withAuth';
import { AuthService } from '@/services/user';

export const getStaticPaths = async () => {
  const all = await AuthService.getAllUsersId();
  return {
    paths: all.map((user) => ({
      params: {
        id: user.id,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const details = await AuthService.getSingleUser(params.id);
  return {
    props: {
      details,
    },
    revalidate: +process.env.REVALIDATE,
  };
};

const Profile = (props) => {
  return <div>{JSON.stringify(props.details)}</div>;
};

export default withAuth(Profile);
