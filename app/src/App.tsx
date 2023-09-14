import "./App.css";
import RenderInput from "./RenderInput";
import FrameworkList from "./FrameworkList";
import UseEffectRender from "./UseEffectRender";
import MockServer from "./MockServer";

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
    </>
  );
}

export default App;
