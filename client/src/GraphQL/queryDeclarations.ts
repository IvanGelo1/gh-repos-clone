
const query_repos = {
  query: `
    query {
      user (login:"rengil") {
        repositories(first: 100) {
          nodes {
            name,
            description,
            isFork,
            forkCount,
            updatedAt
            parent {
              name
              owner {
                login
              }
            }
          }
        }
      }
    }
 `
};

const query_user = {
  query: `
    query {
      user(login:"rengil") {
        name,
        login,
        bio,
        followers {
          totalCount
        },
        following {
          totalCount
        },
        location
      }
    }
 `
};

export { query_repos, query_user }