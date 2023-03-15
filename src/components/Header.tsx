// Header.tsx
import React from 'react'
import { format } from 'date-fns'

interface HeaderProps {
  month: Date
  monthFormat: string
  yearFormat: string
}

export const Header = ({ month, monthFormat, yearFormat }: HeaderProps): JSX.Element => {
  return (
    <div className='rc-calendar__header'>
      <div className='rc-calendar__month-label'>{format(month, monthFormat)}</div>
      <div className='rc-calendar__year-label'>{format(month, yearFormat)}</div>
    </div>
  )
}
