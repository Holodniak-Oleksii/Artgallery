import React from 'react';
import lget from 'lodash/get';
import { useFormContext } from 'react-hook-form';
import { renderError } from '@/helpers/renderError';
import { Wrapper, Container, Label, InputContainer } from './style';
import { Error } from '@/components/style';

const TextArea = ({
  rules,
  iconFront,
  titleComponent,
  disabled,
  placeholder,
  name,
  title,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = lget(errors, name);
  return (
    <InputContainer className="filed-container">
      {title && <Label>{title}</Label>}
      {titleComponent}
      <Wrapper area="true">
        <Container
          area="true"
          error={hasError}
        >
          <textarea
            disabled={disabled}
            className="field"
            placeholder={placeholder}
            {...register(name, rules)}
            onWheel={(e) => e.target.blur()}
          />
        </Container>
        {hasError && <Error>{renderError(hasError, rules)}</Error>}
      </Wrapper>
    </InputContainer>
  );
};

export default TextArea;
