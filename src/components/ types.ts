export interface CalendarProps {
  startDate: Date;
  numMonths: number;
  dayFormat?: string;
  monthFormat?: string;
  yearFormat?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  renderHeader?: (month: Date) => JSX.Element;
  renderDay?: (date: Date, day: number) => JSX.Element;
  shape?: "square" | "rounded" | "circle";
}

export interface DayProps {
  date: Date;
  day: number;
  dayFormat: string;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  renderDay?: (date: Date, day: number) => JSX.Element;
}

export interface CustomLocale extends Locale {
    weekStartsOn: number;
  }
