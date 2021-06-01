import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Should render the component', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Repositories/)).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Find a repository...')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'New' })).toBeInTheDocument();
});