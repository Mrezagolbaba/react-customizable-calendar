import React from 'react';
import { format, startOfMonth, addMonths } from 'date-fns';
import { Day } from './Day';
import { Header } from './Header';
import { CalendarProps,CustomLocale } from './ types';

const Calendar = ({
  startDate,
  numMonths,
  dayFormat = 'd',
  monthFormat = 'MMMM',
  yearFormat = 'yyyy',
  weekStartsOn = 0,
  renderHeader,
  renderDay,
  shape = 'square',
}: CalendarProps): JSX.Element => {
  const months = [];
  for (let i = 0; i < numMonths; i++) {
    const monthStart = startOfMonth(addMonths(startDate, i));
    months.push(monthStart);
  }
  const locale: CustomLocale = {
    weekStartsOn: 0,
    // ...other locale properties, if needed
  };

  return (
    <div className={`rc-calendar rc-calendar--${shape}`}>
      {months.map((month) => (
        <div key={month.toISOString()} className="rc-calendar__month">
          {renderHeader ? (
            renderHeader(month)
          ) : (
            <Header
              month={month}
              monthFormat={monthFormat}
              yearFormat={yearFormat}
            />
          )}
          <div className="rc-calendar__days">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="rc-calendar__day-label"
                style={{ gridColumnStart: index + 1 }}
              >
                {format(addMonths(startDate, 0), 'EEEEEE', {
                    locale,
                })}
              </div>
            ))}
            {Array.from({ length: month.getDate() }).map((_, index) => (
              <Day
                key={index}
                date={addMonths(month, 0)}
                day={index + 1}
                dayFormat={dayFormat}
                weekStartsOn={weekStartsOn}
                renderDay={renderDay}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
