import React, { createContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Container from '@/components/containers';
import { Icon3D, IconCategory } from '@/components/icons';
import { BlueButton, Input, SelectMulti, TextArea } from '@/components/ui';
import { dataURLtoFile } from '@/helpers/base64toFile';
import { SpacesService } from '@/services/spaces';
import coverSelectData from '@/helpers/coverSelectData';
import Preloader3D from '@/components/3D/preloader';
import { useUser } from '@/store/selectors';

import {
  OBJContainer,
  Wrapper,
  Image,
  Flex,
  Form,
  Choose,
  Center,
  Upload,
  Loader,
} from './style';

import { categories } from './data';

export const imageContext = createContext();

const Create = () => {
  const [file, setFile] = useState({ url: null, file: null, send: false });
  const [image, setImage] = useState({
    image: null,
    click: false,
    send: false,
  });
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    mode: 'onSubmit',
  });
  const { userID, userName } = useUser();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = methods;

  const resetHandler = () => {
    setFile({ url: null, file: null, send: false });
    setImage({ image: null, click: false, send: false });
    setLoading(false);
    reset();
  };

  const handlerClick = () => {
    setImage((prev) => ({ ...prev, click: true, send: true }));
  };

  const handlerChange = (e) => {
    let ext = e.target.value.match(/\.([^\.]+)$/)[1];
    if (ext === 'glb') {
      if (e.target.files[0]) {
        setFile({
          url: URL.createObjectURL(e.target.files[0]),
          file: e.target.files[0],
          send: true,
        });
      }
    } else {
      alert('This file format is not supported');
    }
  };

  const onSubmit = async (data) => {
    if (!file.file) {
      setFile((prev) => ({ ...prev, send: true }));
      return null;
    }
    if (!image.image) {
      setImage((prev) => ({ ...prev, send: true }));
      return null;
    }
    const send = new FormData();
    const screen = dataURLtoFile(image.image, 'image.png');
    const categories = coverSelectData(data.categories);

    send.append('name', data.name);
    send.append('description', data.description);
    send.append('image', screen);
    send.append('file3D', file.file);
    send.append('categories', categories);
    send.append('owner', userID);
    send.append('ownerName', userName);

    setLoading(true);
    SpacesService.createSpace(send)
      .then(function (response) {
        resetHandler();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <imageContext.Provider value={{ setImage, image }}>
      <Container>
        <FormProvider {...methods}>
          <Form
            loading={loading}
            onSubmit={handleSubmit(onSubmit)}
            enctype="multipart/form-data"
          >
            {loading && (
              <Loader>
                <div className={'spinner'} />
              </Loader>
            )}
            <Wrapper>
              <OBJContainer haveError={!file.file && file.send}>
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
                      {/* <BlueButton>.fbx</BlueButton> */}
                    </div>
                  </Choose>
                )}
              </OBJContainer>
              <OBJContainer haveError={!image.image && image.send}>
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
                disabled={!file.file}
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
                accept=".glb"
                {...register('file3D', {
                  onChange: handlerChange,
                })}
                value={file?.file?.filename}
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
              <TextArea
                title="Description"
                iconFront={<Icon3D />}
                placeholder={'Description max 500 characters'}
                rules={{
                  required: true,
                  maxLength: 500,
                }}
                name="description"
              />
              <SelectMulti
                icon={<IconCategory />}
                name="categories"
                title="Categories"
                options={categories}
                placeholder="Categories"
                rules={{ required: true }}
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
