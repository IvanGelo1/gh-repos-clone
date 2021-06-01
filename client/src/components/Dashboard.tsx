import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { getRepos } from '../service/apiService';
import { Repo } from '../interfaces/Repo';

import RepoItem from './RepoItem';

function Dashboard() {
  const [ repos, setRepos ] = useState<Repo[]>([]);
  const [ displayedRepos, setDisplayedRepos ] = useState<Repo[]>([]);
  const [ query, setQuery ] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      const repos = await getRepos();
      setRepos(prev => repos);
      setDisplayedRepos(prev => repos);
    })();
  }, []);

  console.log('query here', query);
  useEffect(() => {
    if (!query.length) setDisplayedRepos(prev => repos);
    else {
      setDisplayedRepos(prev => repos.filter(repo => {
        const regex = new RegExp(`${query}`);
        return repo.name.match(regex)?.length;
      }));
    }

  }, [query]);

  return (
    <div className="dashboard-container">
      <div className="repositories-length">Repositories {repos.length}</div>
      <div className="dashboard-input">
        <input value={query} onChange={e => setQuery(e.target.value)} className="text-input" type="text" placeholder="Find a repository..." />
      <button className="btn-new-repo">
        New
      </button>
      </div>
      {displayedRepos.map((repo) => <RepoItem key={repo.updatedAt} repo={repo}/>)}
    </div>
  );
};

export default Dashboard;
