import { FC } from "react";

type Props = {
  frameworks: Array<{ id: number; item: string }>;
};

const FrameworkList: FC<Props> = (props) => {
  const { frameworks } = props;
  if (!frameworks || !frameworks.length) {
    return <h1>No data!</h1>;
  }
  return (
    <div>
      <ul>
        {frameworks.map((framework) => (
          <li key={framework.id}>{framework.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
