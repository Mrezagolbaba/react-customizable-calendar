import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import {Day} from '../src/components/Day';

describe('Day', () => {
  it('renders the day', () => {
    const { getByText } = render(<Day date={new Date('2023-03-17')} />);
    expect(getByText('17')).toBeInTheDocument();
  });

  it('applies the custom day style', () => {
    const { getByTestId } = render(
      <Day
        date={new Date('2023-03-17')}
        customStyle={{ backgroundColor: 'red' }}
      />
    );
    const day = getByTestId('day');
    expect(day).toHaveStyle('background-color: red');
  });

  it('calls the onClick handler when the day is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Day date={new Date('2023-03-17')} onClick={handleClick} />
    );
    const day = getByTestId('day');
    day.click();
    expect(handleClick).toHaveBeenCalled();
  });
});
