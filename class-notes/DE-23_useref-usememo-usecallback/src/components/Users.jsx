import React from 'react';
import { memo } from 'react';
import UserItem from './UserItem';

const Users = ({kisiler}) => {
  console.log('USERS COMPONENT RENDERED');

  return (
    <div className="users">
      
      {kisiler.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
// buradaki memo kullanici=kullanici gönderildiğinde, inputa her veri girişinde burası render edilmemesi için
export default memo(Users);
