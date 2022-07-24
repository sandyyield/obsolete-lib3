import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
// import './App.css';

function App() {
  const compareTime = () => {
    const endDateStr = "2022/08/15";
    var curDate = new Date(),
      endDate = new Date(endDateStr);
    if (curDate <= endDate) {
      return true;
    }
    return false;
  };

  return <div>{compareTime() ? <Home /> : <h1>您的网站预览已到期</h1>}</div>;
}

export default App;
