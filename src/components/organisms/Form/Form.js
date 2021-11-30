import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { AddButton } from 'components/atoms/AddButton/AddButton';
import { Title } from 'components/atoms/Title/Title';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <AddButton type="submit">Add</AddButton>
    </>
  );
};

export default Form;
