import GrandChild from './GrandChild';

export default function Child({ color, onChangeColor }) {
  return (
    <div
      className="Child rounded-md p-4"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 60%)`,
      }}
    >
      <GrandChild color={color} onChangeColor={onChangeColor} />
    </div>
  );
}
