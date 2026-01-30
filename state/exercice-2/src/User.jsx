import { useState } from "react";

const User = () => {
  // state du composant
  const [status, setStatus] = useState(false); // déconnecté par défaut
  const [role, setRole] = useState("Anonyme"); // rôle par défaut

  // rendu conditionnel
  let statusText;
  if (status === true) {
    statusText = "En Ligne";
  } else {
    statusText = "Hors Ligne";
  }

  return (
    <article>
      <h3>{role}</h3>
      <p>{statusText}</p>
    </article>
  );
};

export default User;
