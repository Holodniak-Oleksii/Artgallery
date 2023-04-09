import Image from 'next/image';
import { Item, Wrapper, Title } from './style';
import { useRouter } from 'next/router';

const Grid = ({ data }) => {
  const { push } = useRouter();
  return (
    <Wrapper>
      {data.map((item) => (
        <Item
          key={item.id}
          onClick={() => push(`/spaces?category=${item.title.toLowerCase()}`)}
        >
          <Image
            src={item.image}
            placeholder="blur"
            alt="category"
          />
          <Title className="title">{item.title}</Title>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Grid;
