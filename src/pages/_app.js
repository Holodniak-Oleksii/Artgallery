import { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { getCookies } from 'cookies-next';
import App from 'next/app';

import '@/components/modals/register';
import Layout from '@/layout';

import '../../styles/index.scss';
import { store } from '@/store';
import { AuthService } from '@/services/user';
import { loginUserAction } from '@/store/actions/user';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const MyApp = ({ Component, pageProps, userData }) => {
  if (userData?.token) {
    loginUserAction(userData);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      if (!userData?.token) {
        const user = await AuthService.checkToken(
          localStorage.getItem('ART_GALLERY_ACCESS_TOKEN')
        );
        console.log('🚀 ~ file: _app.js:43 ~ load ~ userData:', user);
        loginUserAction(user);
      }
    };
    load();
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const { res, req } = appContext.ctx;
  const cookieAuth = getCookies({ req, res });
  const userData = await AuthService.checkToken(
    cookieAuth.ART_GALLERY_ACCESS_TOKEN
  );
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, userData };
};

export default MyApp;
