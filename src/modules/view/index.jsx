import axios from "axios";
import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Preloader3D } from "../../components/3D/preloader";
import DarkButton from "../../components/ui/buttons/dark";
import { dataURLtoFile } from "../../helpers/base64toFile";
import { OBJContainer, Wrapper, Image, Flex, Form } from "./style";
export const imageContext = createContext();

const ViewPage = () => {
  const [file, setFile] = useState({url: null, file: null});
  const [image, setImage] = useState({ image: null, click: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlerChange = (e) => {
    setFile({url: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]});
    //   format = file.name.split('.').pop().toLowerCase()
  };
  const onSubmit = async (data) => {

    const form = new FormData()
    form.append("name", data.name)
    form.append("image", dataURLtoFile(image.image, 'image.png'))
    form.append("file3D", file.file)

    console.log(form)
    axios.post('http://localhost:5000/api/upload/add',form )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  const handlerClick = () => {
    setImage((prev) => ({ ...prev, click: true }));
  };
  return (
    <imageContext.Provider value={{ setImage, image }}>
      <Form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
        <Wrapper>
          <OBJContainer>
            {file.url ? <Preloader3D format={"glb"} url={file.url} /> : "choose file"}
          </OBJContainer>
          <Image src={image.image} alt='' />
        </Wrapper>
        <Flex>
          <DarkButton type={'button'} title={"Photo"} onClick={handlerClick} />
          <input type='file' {...register('file3D')} onChange={handlerChange} />
        </Flex>
        <input {...register('name')}  />
        <DarkButton title={"Submit"} />
      </Form>
    </imageContext.Provider>
  );
};

export default ViewPage;
