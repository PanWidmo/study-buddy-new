import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0px;
  }
`;

const FormField = React.forwardRef(({ label, name, id, type = 'text', value, onChange, isTextarea, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isTextarea ? (
        <Input isTextarea as="textarea" name={name} id={id} value={value} onChange={onChange} data-testid={label} {...props} ref={ref} />
      ) : (
        <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} {...props} ref={ref} />
      )}
    </Wrapper>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
