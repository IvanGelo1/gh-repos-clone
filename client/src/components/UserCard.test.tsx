import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserCard from './UserCard';

test('Should render elements', async() => {
  render(<UserCard />);
  expect(screen.getByRole('img', {name: 'User profile'})).toBeInTheDocument();
  expect(screen.getByText('name')).toBeInTheDocument();
  expect(screen.getByText('login')).toBeInTheDocument();
  expect(screen.getByText('bio')).toBeInTheDocument();
  expect(screen.getByText('0 following')).toBeInTheDocument();
  expect(screen.getByText('0 followers')).toBeInTheDocument();
  expect(screen.getByText('location')).toBeInTheDocument();
   await waitFor(() => {
     expect(screen.getByText('Munich, Germany')).toBeInTheDocument();
     expect(screen.getByText('68 following')).toBeInTheDocument();
     expect(screen.getByText('15 followers')).toBeInTheDocument();
    });
});