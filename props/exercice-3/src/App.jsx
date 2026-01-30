import './App.css';
import User from './User.jsx';

const user = {
  firstName: "Alain",
  lastName: "Terieur",
  email: "alain.terieur@inlook.com"
};

function App() {
  return (
    <User identity={user} />   // recupere l'objet identity dans  user 
  );
}

export default App;
