import Details from '@/modules/detail';

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const allResponse = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/detail`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    }
  );
  const all = await allResponse.json();
  return {
    props: {
      data: all[0],
    },
  };
};

export default (props) => <Details data={props.data} />;
