import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Item, List, Wrapper } from "./style";

const Home = () => {
  const [data, setData] = useState(false);
  const push = useNavigate();
  useEffect(() => {
    const load = async () => {
      axios
        .get("http://localhost:5000/api/upload/all")
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    load();
  }, []);
  if (!data) return null;
  return (
    <Wrapper>
      <List>
        {data.map((item) => (
          <Item
            key={item._id}
            onClick={() => {
              push("/artwork/" + item._id);
            }}
          >
            <img src={item?.pathImage} alt='artwork' />
            <p>{item?.name}</p>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Home;
