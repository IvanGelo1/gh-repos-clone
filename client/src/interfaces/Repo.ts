
export interface Repo {
  name: string,
  description: string,
  isFork: boolean,
  forkCount: number,
  updatedAt: string,
  parent?: Parent,
}

interface Parent {
  name: string
  owner: {
    login: string
  }
}