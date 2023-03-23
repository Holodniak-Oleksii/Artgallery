import Container from '@/components/containers';
import { Icon3D, IconCategory } from '@/components/icons';
import { BlueButton, Input, SelectMulti } from '@/components/ui';
import React, { createContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { dataURLtoFile } from '@/helpers/base64toFile';
import {
  OBJContainer,
  Wrapper,
  Image,
  Flex,
  Form,
  Choose,
  Center,
  Upload,
} from './style';
import { categories } from './data';
import { SpacesService } from '@/services/spaces';
import coverSelectData from '@/helpers/coverSelectData';
import Preloader3D from '@/components/3D/preloader';

export const imageContext = createContext();

const Create = () => {
  const [file, setFile] = useState({ url: null, file: null });
  const [image, setImage] = useState({ image: null, click: false });
  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit, reset, setValue, register } = methods;

  const resetHandler = () => {
    setFile({ url: null, file: null });
    setImage({ image: null, click: false });
    reset();
  };

  const handlerChange = (e) => {
    if (e.target.files[0]) {
      setFile({
        url: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      });
    }
  };

  const onSubmit = async (data) => {
    const form = new FormData();

    form.append('name', data.name);
    form.append('image', dataURLtoFile(image.image, 'image.png'));
    form.append('file3D', file.file);
    form.append('categories', coverSelectData(data.categories));

    SpacesService.createSpace(form)
      .then(function (response) {
        console.log(response);
        resetHandler();
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
      <Container>
        <FormProvider {...methods}>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            enctype="multipart/form-data"
          >
            <Wrapper>
              <OBJContainer>
                {file.url ? (
                  <Preloader3D
                    format={'glb'}
                    url={file.url}
                  />
                ) : (
                  <Choose>
                    <h5>Choose file</h5>
                    <div>
                      <BlueButton>.glb</BlueButton>
                      <BlueButton>.fbx</BlueButton>
                    </div>
                  </Choose>
                )}
              </OBJContainer>
              <OBJContainer>
                {image.image ? (
                  <Image
                    src={image.image}
                    alt=""
                  />
                ) : (
                  <Choose>
                    <h5>Download the 3D model and take a photo for preview</h5>
                  </Choose>
                )}
              </OBJContainer>
            </Wrapper>
            <Flex>
              <BlueButton
                type={'button'}
                onClick={handlerClick}
              >
                Take a photo
              </BlueButton>
              <Upload htmlFor="file">
                {!file.file ? 'Upload' : 'Replace'}
              </Upload>
              <input
                id="file"
                type="file"
                {...register('file3D')}
                onChange={handlerChange}
                rules={{
                  required: true,
                }}
                name="file3D"
              />
            </Flex>
            <Center>
              <Input
                title="Name"
                iconFront={<Icon3D />}
                placeholder={'Name'}
                rules={{
                  required: true,
                }}
                name="name"
              />
              <SelectMulti
                icon={<IconCategory />}
                name="categories"
                title="Categories"
                options={categories}
                placeholder="Categories"
                rules={{ required: 'This field is required' }}
              />
              <BlueButton type={'submit'}>Submit</BlueButton>
            </Center>
          </Form>
        </FormProvider>
      </Container>
    </imageContext.Provider>
  );
};

export default Create;
