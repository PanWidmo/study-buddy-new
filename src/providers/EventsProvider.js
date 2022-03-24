import axios from 'axios';
import React from 'react';

const EventsProvider = ({ render, group }) => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
  }, [group]);

  return render(events);
};

export default EventsProvider;
