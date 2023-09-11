import { useState, FC, ChangeEvent } from "react";

type Props = {
  outputConsole: (input: string) => void;
};

const RenderInput: FC<Props> = (props) => {
  const { outputConsole } = props;
  const [input, setInput] = useState("");

  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
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
