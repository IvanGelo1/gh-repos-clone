import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { getRepos } from '../service/apiService';
import { Repo } from '../interfaces/Repo';

import RepoItem from './RepoItem';

function Dashboard() {
  const [ repos, setRepos ] = useState<Repo[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const repos = await getRepos();
      setRepos(prev => repos);
    })();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="repositories-length">Repositories {repos.length}</div>
      <input className="text-input" type="text" placeholder="Find a repository..." />
      {repos.map((repo) => <RepoItem key={repo.updatedAt} repo={repo}/>)}
    </div>
  );
};

export default Dashboard;
