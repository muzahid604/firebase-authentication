import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handleBtn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="App">
      <button onClick={handleBtn}>Go to Google</button>
    </div>
  );
}

export default App;
