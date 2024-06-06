import SiminnLogo from "./Components/SiminnLogo";
import TemplateContainer from "./Components/TemplateContainer";

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-10 p-5">
        <SiminnLogo />
        <h1 className="font-bold text-2xl">TV-Admin - Channels Test</h1>
      </div>
      <h2 className="flex flex-row justify-center">
        Select a template from the options below
      </h2>
      <div className="flex flex-col">
        <TemplateContainer />
      </div>
      <div className="flex flex-col justify-center items-center"></div>
      {/*<div className="flex flex-row justify-center items-center">
        <ListTable />
  </div>*/}
    </>
  );
}

export default App;
