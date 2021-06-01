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
      <div className="usercard-content">
        <div className="usercard-title">
          <div className="user-name">{user.name}</div>
          <div className="usercard-login">{user.login}</div>
        </div>
        <div className="usercard-bio">{user.bio}</div>
        <div className="usercard-follow">
          <div className="usercard-followers">{user.followers.totalCount} followers</div>
          <div>{user.following.totalCount} following</div>
        </div>
        <div className="usercard-location">{user.location}</div>
      </div>
    </div>
  )
};

export default UserCard;
