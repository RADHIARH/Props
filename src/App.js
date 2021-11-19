import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.js';
import Image from './profile/profile.jpg';


function App() {
  const handleName=(data)=> {
    alert(`Bienvenue  ${data}`);
  }
  
  return (
    <div className="App">
       <Profile  bio="Titulaire d'un diplome nationale d'ingenieur en Informatique , interessée d'une part par les domaines qui traitent les données afin d'en sortir des connaisances comme le DataScience ,et le Business Intelligence ,d'une autre part je suis trés  et inspirée par le développement des applications web  attirantes en utilisant Bootstrap et le framework React. " profession="Ingénieur en Informatique" hName={handleName}>
      {Image}</Profile>

      
     </div>
  );
}

export default App;
