import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Scene from "../../components/3D/scene";
import { Wrapper } from "./style";

const Details = () => {
  const { id = null } = useParams();
  const [data, setData] = useState(false);
  
  useEffect(() => {
    const load = async () => {
      axios
        .post("http://localhost:5000/api/upload/detail", {id: id})
        .then(function (response) {
          setData(response.data[0]);
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
      <Scene url={data?.path3D}/>
      <p>{data.name}</p>
    </Wrapper>
  );
};

export default Details;
