import SiminnLogo from "./Components/SiminnLogo";
import TemplateContainer from "./Components/TemplateContainer";
import { Button } from "./Components/ui/button";

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-10 p-5">
        <SiminnLogo />
        <h1>TV-Admin - Channels Test</h1>
      </div>
      <div className="flex">
        <TemplateContainer />
        <Button>Hello</Button>
      </div>
    </>
  );
}

export default App;
