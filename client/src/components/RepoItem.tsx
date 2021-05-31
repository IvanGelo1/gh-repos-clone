import React from 'react'

import { Repo } from '../interfaces/Repo';

import './RepoItem.css';

const RepoItem: React.FC<{repo: Repo}> = ({ repo }) => {
  return (
    <div className="repoitem-container">
      <div>{repo.name}</div>
      {
        repo.parent
        ?
        <div>Forked from {repo.parent.owner.login}/{repo.parent.name}</div>
        :
        <div></div>
      }
      <div>{repo.description}</div>
      <div>{repo.forkCount}</div>
      <div>Updated on {repo.updatedAt}</div>
    </div>
  );
};

export default RepoItem;
