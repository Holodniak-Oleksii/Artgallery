import NotFound from '@/pages/404';
import { useUser } from '@/store/selectors';

const withAuth = (Component) => {
  const Auth = (props) => {
    const { isAuth } = useUser();

    if (!isAuth) {
      return <NotFound />;
    }
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...props} />);
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }
  return Auth;
};

export default withAuth;
