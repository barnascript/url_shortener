import { Home } from "./exports/pages";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN_URL;
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
