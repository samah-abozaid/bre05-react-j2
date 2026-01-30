import './App.css'
import User from './User.jsx'
function App() {
let users = [
    {
        firstName : "Alain",
        lastName: "Terieur",
        email : "alain.terieur@inlook.com"
    },
    {
        firstName : "Alex",
        lastName: "Terieur",
        email : "alex.terieur@outlook.com"
    },
];

  return (   // je fais un boucle pour le users et j'envoie chaque objet de tableau en props 
    <ul>
    {users.map((user, i )=> <li key={i}><User  user = {user}/></li>)}
    </ul>
  )
  
}

export default App;