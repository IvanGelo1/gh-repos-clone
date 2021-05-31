import React, { useEffect, useState } from 'react'
import './UserCard.css';
import { getUser } from '../service/apiService';
import { User, InitialUser } from '../interfaces/User';

function UserCard() {
  const [ user, setUser ] = useState<User>(InitialUser);

  useEffect(() => {
    (async (): Promise<void> => {
      const userData = await getUser();
      setUser(prev => userData);
    })();
  }, []);

  return (
    <div className="usercard-container">
      <img className="user-img" src={user.avatarUrl} alt="User profile" />
      <div className="usecard-title">
        <div className="user-name">{user.name}</div>
        <div>{user.login}</div>
      </div>
      <div>{user.bio}</div>
      <div className="usercard-follow">
        <div>{user.followers.totalCount} followers</div>
        <div>{user.following.totalCount} following</div>
      </div>
      <div>{user.location}</div>
    </div>
  )
};

export default UserCard;
