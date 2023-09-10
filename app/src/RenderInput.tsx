import React from "react";

type Props = {
  outputConsole: (input: string) => void;
};

const RenderInput: React.FC<Props> = (props) => {
  const { outputConsole } = props;
  const [input, setInput] = React.useState("");

  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.currentTarget instanceof HTMLInputElement)) {
      return;
    }
    setInput(e.currentTarget.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>console</button>
    </div>
  );
};

export default RenderInput;
