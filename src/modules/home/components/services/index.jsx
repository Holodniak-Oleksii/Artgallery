import React, { useEffect, useRef, useState } from "react";
import Matrix from "@/helpers/svgMatrix";
import {
  Wrapper,
  Item,
  TravelButton,
  FakeContainer,
  Container,
  Content,
  Text,
} from "./style";
import handlerTravel from "./hook";

const Services = ({ items }) => {
  const ref = useRef();
  const itemFirst = useRef();
  const [travel, setTravel] = useState(false);

  useEffect(() => {
    let rect = itemFirst.current.getBoundingClientRect();
    let container = ref.current.getBoundingClientRect();
    setTravel({
      last: rect.left - container.left,
      current: rect.left - container.left,
      active: 0,
      clicked: true,
    });
  }, [itemFirst]);

  return (
    <Container>
      <Wrapper ref={ref}>
        {items.map((item) => (
          <Item
            ref={item.id === 0 ? itemFirst : null}
            transparent
            active={travel.active === item.id}
            key={item.id}
            onClick={(e) => {
              handlerTravel(e, item.id, setTravel, travel, ref);
            }}
          >
            {item.icon}
          </Item>
        ))}
        {travel && (
          <FakeContainer>
            {items.map((item) => (
              <Item key={item.id} active={travel.active === item.id} />
            ))}
            <TravelButton
              id={"travel"}
              currentData={travel.current}
              lastData={travel.last}
            />
            <Matrix />
          </FakeContainer>
        )}
      </Wrapper>
      <Content>
        {items.map((item) => (
          <Text key={item.id} active={item.id === travel.active}>
            {item.text}
          </Text>
        ))}
      </Content>
    </Container>
  );
};

export default Services;
