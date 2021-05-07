import React from 'react';
import { render } from '@testing-library/react';
import JobList from './JobList';

it("renders without crashing", function() {
  render(<JobList />);
});

it("matches snapshot with no jobs", function() {
  const { asFragment } = render(<JobList />);
  expect(asFragment()).toMatchSnapshot();
});
