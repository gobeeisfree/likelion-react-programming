import Parent from './Parent';

export default function GrandParent({ color, onChangeColor }) {
  return (
    <div
      className="GrandParent rounded-md p-4"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 20%)`,
      }}
    >
      <Parent color={color} onChangeColor={onChangeColor} />
    </div>
  );
}
