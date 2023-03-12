
import './App.css';
import Profil from './componet/Profil';
import Fullname from './componet/Fullname';
import Adresse from './componet/Adresse ';

function App({name}) {
  
  
  return (
    <div className="App">
      <Profil/>
      <Adresse/>
      <Fullname />
    </div>
  );
}

export default App;
