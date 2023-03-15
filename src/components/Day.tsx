
import React from 'react';
import { format, isSameDay } from 'date-fns';
import { DayProps } from './ types';

export const Day = ({
  date,
  day,
  dayFormat = 'd',
  weekStartsOn = 0,
  renderDay,
}: DayProps): JSX.Element => {
  const isFirstDayOfWeek = date.getDay() === weekStartsOn;
  const isToday = isSameDay(date, new Date());

  return (
    <div
      className={`rc-calendar__day ${
        isFirstDayOfWeek ? 'rc-calendar__day--first-of-week' : ''
      } ${isToday ? 'rc-calendar__day--today' : ''}`}
    >
      {renderDay ? (
        renderDay(date, day)
      ) : (
        <div className="rc-calendar__day-number">
          {format(date, dayFormat)}
        </div>
      )}
    </div>
  );
};