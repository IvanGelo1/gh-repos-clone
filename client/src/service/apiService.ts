import { User } from '../interfaces/User';
import { Repo } from '../interfaces/Repo';
import { query_user, query_repos } from '../GraphQL/queryDeclarations';

const headers = {
  "Content-Type": "application/json",
  Authorization: `bearer ${process.env.REACT_APP_GITHUB_AUTHENTICATION}`
};

async function getUser(): Promise<User> {
  try {
    const rawData = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(query_user),
    });
    const parsedData = JSON.parse(await rawData.text());
    return parsedData.data.user;
  } catch (err) {
    throw new Error(err);
  }
};

async function getRepos(): Promise<Repo[]> {
  try {
    const rawData = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(query_repos),
    });
    const parsedData = JSON.parse(await rawData.text());
    return parsedData.data.user.repositories.nodes;
  } catch (err) {
    throw new Error(err);
  }
};

export { getUser, getRepos };