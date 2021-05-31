import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { getRepos } from '../service/apiService';
import { Repo } from '../interfaces/Repo';

function Dashboard() {
  const [ repos, setRepos ] = useState<Repo[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const repos = await getRepos();
      setRepos(prev => repos);
    })();
  }, []);

  return (
    <div>

    </div>
  );
};

export default Dashboard;
