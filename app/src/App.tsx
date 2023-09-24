import "./App.css";
import RenderInput from "./RenderInput";
import FrameworkList from "./FrameworkList";
import UseEffectRender from "./UseEffectRender";
import MockServer from "./MockServer";
import Redux from "./Redux";
import ReduxAsync from "./ReduxAsync";

function App() {
  const data = [
    {
      id: 1,
      item: "React",
    },
    {
      id: 2,
      item: "Vue",
    },
    {
      id: 3,
      item: "svelte",
    },
  ];
  return (
    <>
      <RenderInput outputConsole={console.log} />
      <FrameworkList frameworks={data} />
      <UseEffectRender />
      <MockServer />
      <Redux />
      <ReduxAsync />
    </>
  );
}

export default App;
