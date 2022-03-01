import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getStudentsByGroup(id);
      setStudents(groups);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <Title>Students List </Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
