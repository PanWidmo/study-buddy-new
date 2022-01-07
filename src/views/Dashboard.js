import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { Wrapper, TitleWrapper, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
