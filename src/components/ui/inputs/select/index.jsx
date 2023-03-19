import React from 'react';
import { Error } from '@/components/style.js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Controller, useFormContext } from 'react-hook-form';

import {
  Wrapper,
  selectStyles,
  errorStyle,
  Icon,
  InputContainer,
  Label,
} from './style.js';

const SelectMulti = ({
  options,
  name,
  rules,
  title,
  placeholder,
  disabled,
  defaultValue,
  setForm,
  form,
  icon,
}) => {
  const methods = useFormContext();
  const animatedComponents = makeAnimated();
  return (
    <InputContainer>
      <Label>{title}</Label>
      <Controller
        control={methods.control}
        name={name}
        rules={rules}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <Wrapper>
            <Icon
              type="button"
              title={title}
            >
              {icon}
            </Icon>
            {form ? (
              <Select
                name={name}
                menuPlacement="top"
                isMulti
                components={animatedComponents}
                className={disabled ? 'select-custom' : ''}
                placeholder={placeholder}
                options={options}
                onChange={(value) => {
                  onChange(value);
                  setForm({
                    ...form,
                    [name]: value.value,
                  });
                }}
                defaultValue={defaultValue ? defaultValue : null}
                styles={error ? errorStyle : selectStyles}
              />
            ) : (
              <Select
                name={name}
                menuPlacement="top"
                isMulti
                components={animatedComponents}
                className={disabled ? 'select-custom' : ''}
                placeholder={placeholder}
                options={options}
                onChange={(value) => {
                  onChange(value);
                }}
                defaultValue={defaultValue ? defaultValue : null}
                styles={error ? errorStyle : selectStyles}
              />
            )}

            {error && <Error>{error.message}</Error>}
          </Wrapper>
        )}
      />
    </InputContainer>
  );
};
export default SelectMulti;
