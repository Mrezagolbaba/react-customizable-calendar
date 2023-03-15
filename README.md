# React Customizable Calendar
##### React Customizable Calendar is a flexible and customizable calendar component for React, built with TypeScript.

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
# Installation
Using npm:

```npm install react-customizable-calendar```

Using yarn:

``` yarn add react-customizable-calendar ```
# Usage

To use the calendar component, import it into your React component:
```
import React from 'react';
import Calendar, { CalendarProps } from 'react-customizable-calendar';

const MyComponent: React.FC = () => {
  const handleDayClick = (date: Date) => {
    console.log(`Clicked on date: ${date}`);
  };

  const customLocale: CustomLocale = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekStartsOn: 0,
  };

  const headerRender = ({ date, onPrevMonthClick, onNextMonthClick }: HeaderProps) => {
    const handlePrevClick = () => onPrevMonthClick();
    const handleNextClick = () => onNextMonthClick();

    return (
      <div>
        <button onClick={handlePrevClick}>Prev</button>
        <span>{date.toLocaleDateString()}</span>
        <button onClick={handleNextClick}>Next</button>
      </div>
    );
  };

  const dayRender = ({ date }: DayProps) => {
    return (
      <div>{date.getDate()}</div>
    );
  };

  const calendarProps: CalendarProps = {
    startDate: new Date(),
    numMonths: 1,
    dayFormat: 'd',
    monthFormat: 'MMMM',
    yearFormat: 'yyyy',
    weekStartsOn: 0,
    renderHeader: headerRender,
    renderDay: dayRender,
    shape: 'square',
    locale: customLocale,
    onDayClick: handleDayClick,
  };

  return (
    <Calendar {...calendarProps} />
  );
};
```
## Props

| Prop Name | Type | Required |Description|
| ------ | ------ | ------ | ------ |
| startDate | `Date` | Yes | The start date for the calendar|
| numMonths | `number` | No | The number of months to display. Default is 1|
| dayFormat | `string` | No | The format string for the day. Default is 'd'|
| monthFormat | `string` | No | The format string for the month. Default is 'MMMM'|
| yearFormat | `string` | No | The format string for the year. Default is 'yyyy'|
| weekStartsOn | number | No | 2 |
| renderHeader | `(props: HeaderProps) => JSX.Element` | No | A function that returns a JSX element to render the header|
| renderDay | `(props: DayProps) => JSX.Element` | No | A function that returns a JSX element to render each day|
| shape | string | No| 'circle' |

## License

MIT

