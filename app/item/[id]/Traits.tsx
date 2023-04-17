export default function Trait(props: any) {
  return (
    <div className="flex flex-row justify-between my-3">
      <h2 className="text-gray-500 font-semibold">{props.attribute}</h2>
      <div className="flex items-center gap-x-4">
        <h2>{props.value}</h2>
        <span className="text-sm text-gray-500">(100%)</span>
      </div>
    </div>
  );
}
