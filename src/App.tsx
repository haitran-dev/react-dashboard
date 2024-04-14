import "./App.scss";
import { Content, Navigation } from "./components";
import LayoutProvider from "./contexts/LayoutProvider";

function App() {
  return (
    <LayoutProvider>
      <main>
        <Navigation />
        <Content />
      </main>
    </LayoutProvider>
  );
}

export default App;
