import Header from "./components/Header"
import Main from "./components/Main"
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
