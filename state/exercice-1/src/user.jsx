import { useState } from 'react';

const User = ({ isOn }) => {
  const [online, setOnline] = useState(isOn);

  if (online === true) {
    return <p>En ligne</p>;
  } else {
    return <p>Hors ligne</p>;
  }
};

export default User;
