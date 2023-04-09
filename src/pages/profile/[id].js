import Meta from '@/components/meta';
import ProfilePage from '@/modules/profile';
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
  return (
    <>
      <Meta title={props.details.username} />
      <ProfilePage data={props.details} />
    </>
  );
};

export default Profile;
