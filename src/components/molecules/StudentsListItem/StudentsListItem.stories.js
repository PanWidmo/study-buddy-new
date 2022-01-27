import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Jan Dzban',
    attendance: '24%',
    average: '5.0',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Jan Dzban',
    attendance: '24%',
    average: '3.5',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Jan Dzban',
    attendance: '24%',
    average: '2.0',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Jan Dzban',
    attendance: '24%',
    average: null,
  },
};
