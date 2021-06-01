import React from 'react'

import { Repo } from '../interfaces/Repo';

import './RepoItem.css';

import moment from 'moment';

const RepoItem: React.FC<{repo: Repo}> = ({ repo }) => {
  return (
    <div className="repoitem-container">
      <div className="repo-item-left">
        <div className="repo-name">{repo.name}</div>
        {
          repo.parent
          ?
          <div className="repo-fork">Forked from {repo.parent.owner.login}/{repo.parent.name}</div>
          :
          <div></div>
        }
        <div className="repo-description">{repo.description}</div>
        {
          repo.forkCount > 0
          ?
          <div>forks {repo.forkCount}</div>
          :
          <div></div>
        }
        <div className="repo-updated">Updated on {moment(repo.updatedAt).format('ll')}</div>
      </div>
      <div className="repo-item-right">
        <div className="repo-item-star">Star</div>
      </div>
    </div>
  );
};

export default RepoItem;
