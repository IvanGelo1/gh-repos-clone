import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoItem from './RepoItem';

import { Repo } from '../interfaces/Repo';

const repo: Repo = {
  name: 'repo-name',
  description: 'repo-description',
  isFork: true,
  forkCount: 2,
  updatedAt: '2017-02-01T16:28:47Z',
  parent: {
    name: 'facebook',
    owner: {
      login: 'facebook'
    }
  }
};

test('Should render propped data', () => {
  render(<RepoItem repo={repo} />);
  expect(screen.getByText('repo-name')).toBeInTheDocument();
  expect(screen.getByText('Forked from facebook/facebook')).toBeInTheDocument();
  expect(screen.getByText('repo-description')).toBeInTheDocument();
  expect(screen.getByText('forks 2')).toBeInTheDocument();
  expect(screen.getByText('Star')).toBeInTheDocument();
});