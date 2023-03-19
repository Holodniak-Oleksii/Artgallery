import Layout from '@/layout';

import '@/assets/scss/index.scss';

import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const MyApp = ({ Component, pageProps }) => {
  const { route } = useRouter();

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(
    <Component
      {...pageProps}
      key={route}
    />
  );
};
export default MyApp;
