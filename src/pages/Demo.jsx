import Switcher from '@/components/Switcher/Switcher';

function Demo() {
  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 8,
      }}
    >
      {/* Atomic Component */}
      <Switcher onLabel="on" offLabel="off" />
      <Switcher
        on
        onLabel="on"
        offLabel="off"
        onClick={() => {
          console.log('clicked switcher');
        }}
      />
    </div>
  );
}

export default Demo;
