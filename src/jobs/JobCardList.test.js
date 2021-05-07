import React from 'react';
import { render } from '@testing-library/react';
import JobCardList from './JobCardList';

it("renders without crashing", function() {
  render(<JobCardList />);
});