import React, { useState } from 'react';
import lget from 'lodash/get';
import { useFormContext } from 'react-hook-form';
import { renderError } from '@/helpers/renderError';
import { IconEye, IconEyeClose } from '@/components/icons';
import {
  Wrapper,
  Container,
  Icon,
  IconPassword,
  Label,
  InputContainer,
} from './style';
import { Error } from '@/components/style';

const Input = ({
  rules,
  password,
  iconFront,
  titleComponent,
  disabled,
  type = 'text',
  inputMode = 'text',
  iconBack,
  placeholder,
  onChange,
  name,
  title,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = lget(errors, name);
  const [show, setShow] = useState(false);
  return (
    <InputContainer className="filed-container">
      {title && <Label>{title}</Label>}

      {titleComponent}
      <Wrapper>
        <Container
          error={hasError}
          leftIcon={iconFront && !iconBack}
          rightIcon={!iconFront && iconBack}
          haveDoubleIcon={iconBack && iconFront}
          password={password}
        >
          {iconFront && (
            <Icon
              type="button"
              title={title}
              left="true"
            >
              {iconFront}
            </Icon>
          )}
          {onChange ? (
            <input
              type={password && (show ? type : 'password')}
              inputMode={inputMode}
              disabled={disabled}
              className="field"
              placeholder={placeholder}
              {...register(name, {
                ...rules,
                onChange: (e) => {
                  onChange(e);
                },
              })}
              onWheel={(e) => e.target.blur()}
            />
          ) : (
            <input
              type={password && (show ? 'text' : 'password')}
              disabled={disabled}
              inputMode={inputMode}
              className="field"
              placeholder={placeholder}
              {...register(name, rules)}
              onWheel={(e) => e.target.blur()}
            />
          )}
          {iconBack && <Icon>{iconBack}</Icon>}
          {password && (
            <IconPassword
              type="button"
              onClick={() => setShow(!show)}
            >
              {show ? <IconEyeClose /> : <IconEye />}
            </IconPassword>
          )}
        </Container>
        {hasError && <Error>{renderError(hasError, rules)}</Error>}
      </Wrapper>
    </InputContainer>
  );
};

export default Input;
