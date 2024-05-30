import { type Payload } from "recharts/types/component/DefaultLegendContent";

interface props {
  payload?: Payload[];
}

export const CustomLegend = (props: props) => {
  const { payload } = props;

  return (
    <div className="flex w-full items-center justify-center gap-4 border-t border-dashed pt-3.5 dark:border-zinc-700">
      {payload?.map((entry, i) => (
        <div
          className="flex h-full items-center justify-center gap-1.5"
          key={i}
        >
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <h2 className="text-base font-normal capitalize tracking-tight text-black-1 dark:text-white">
            {entry.value}
          </h2>
        </div>
      ))}
    </div>
  );
};
