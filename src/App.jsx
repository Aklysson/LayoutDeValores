import {GlobalStyle} from "./styles/GlobalStyle"
import {Header} from "./components/Header/index"
import { Dashboard } from "./components/Dashboard/index";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Dashboard />
    </div>
  );
}


export default App