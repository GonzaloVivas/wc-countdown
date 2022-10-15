import { ReactElement } from "react";

type Props = {
  value: number;
  label: string;
};

const CountdownCard = ({ value, label }: Props): ReactElement => {
  return (
    <div className="bg-white p-4 text-gray-900 font-extrabold text-center w-44 lg:w-60">
      <span className="block text-5xl md:text-9xl">{value}</span>
      <span>{label}</span>
    </div>
  );
};

export default CountdownCard;
