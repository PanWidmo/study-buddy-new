import React from 'react';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { AddButton } from 'components/atoms/AddButton/AddButton';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <h1>Add new student</h1>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <AddButton type="submit">Add</AddButton>
      </Wrapper>
    </>
  );
};

export default Form;
