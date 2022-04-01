import React from 'react';
import AddToCalendar from '@culturehq/add-to-calendar';

// @ts-ignore
// tslint:disable-next-line
import '@culturehq/add-to-calendar/dist/styles.css';

export const AddToCal = ({
  startsAt,
  location,
  endsAt,
  title,
  desc,
}: {
  startsAt: string;
  location: string;
  endsAt: string;
  title: string;
  desc: string;
}) => {
  return (
    <AddToCalendar
      event={{
        name: `FlutterVikings - ${title}`,
        details: desc,
        location,
        startsAt,
        endsAt,
      }}
    />
  );
};
