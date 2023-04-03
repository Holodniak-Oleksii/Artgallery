import Image from 'next/image';
import { Item, Wrapper, Title } from './style';

const Grid = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item) => (
        <Item key={item.id}>
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
