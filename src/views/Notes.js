import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'store';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    console.log('asd');
    dispatch(addNote({ title, content }));
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField {...register('title', { required: true })} label="Title" name="title" id="title" />
        <StyledFormField {...register('content', { required: true })} isTextarea label="Content" name="content" id="content" />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button type="submit">Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ id, title, content }) => <Note key={id} id={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
