import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';
import events from '~/assets/events.json'



export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />


      {/* event list item */}
      <EventListItem 
      event={events[1]}
      />

<EventListItem 
      event={events[2]}
      />
      
      <EventListItem 
      event={events[3]}
      />
    </>
  );
}