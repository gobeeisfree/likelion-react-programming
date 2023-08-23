import Child from './Child';

export default function Parent({ color, onChangeColor }) {
  return (
    <div
      className="Parent rounded-md p-4"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 40%)`,
      }}
    >
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}
