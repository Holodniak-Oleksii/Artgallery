import Spaces from '@/modules/spaces';

export const getStaticProps = async () => {
  const allResponse = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/all`
  );
  const all = await allResponse.json();
  return {
    props: {
      data: all,
    },
  };
};

export default (props) => <Spaces data={props.data} />;
