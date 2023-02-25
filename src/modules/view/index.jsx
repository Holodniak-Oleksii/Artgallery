import React, { createContext, useState } from "react";
import { Preloader3D } from "../../components/3D/preloader";
import DarkButton from "../../components/ui/buttons/dark";
import { OBJContainer, Wrapper, Image, Flex } from "./style";
export const imageContext = createContext();

const ViewPage = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState({ image: null, click: false });

  const handlerChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    //   format = file.name.split('.').pop().toLowerCase()
  };

  const handlerClick = () => {
    setImage((prev) => ({ ...prev, click: true }));
  };
  return (
    <imageContext.Provider value={{ setImage, image }}>
      <Wrapper>
        <OBJContainer>
          {file ? (
            <Preloader3D format={"glb"} url={file} />
          ) : (
            'choose file'
          )}
        </OBJContainer>
        <Image src={image.image} alt='' />
      </Wrapper>
      <Flex>
      <DarkButton title={'Photo'} onClick={handlerClick}/>
      <input type='file' onChange={handlerChange} />
      </Flex>
    </imageContext.Provider>
  );
};

export default ViewPage;
