import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Greeting name="COMP1023" />
      <UserProfile />
    </>
  );
}

export default App;
