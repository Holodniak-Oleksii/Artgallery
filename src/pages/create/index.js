import Meta from '@/components/meta';
import Create from '@/modules/create';
import { getCookies } from 'cookies-next';
import Router from 'next/router';

export const getServerSideProps = ({ req, res }) => {
  const cookieAuth = getCookies({ req, res });

  if (!cookieAuth.ART_GALLERY_ACCESS_TOKEN && !req) {
    Router.replace('/');
    return { props: { cookie: {} } };
  }

  if (!cookieAuth.ART_GALLERY_ACCESS_TOKEN && req) {
    res.writeHead(302, {
      Location: process.env.CLIENT_URL,
    });
    res.end();
    return { props: { cookie: {} } };
  }
  return { props: { cookie: {} } };
};

const CreatePage = () => (
  <>
    <Meta title="Create Art" />
    <Create />
  </>
);

export default CreatePage;
