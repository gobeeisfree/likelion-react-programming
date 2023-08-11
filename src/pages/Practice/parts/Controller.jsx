import GoToButton from './GoToButton';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton
        onPointerEnter={() => console.log('pointer enter')}
        onClick={() => console.log('go to down')}
        onMouseEnter={() => console.log('mouse enter')}
        onMouseLeave={() => console.log('mouse leave')}
        onKeyDown={() => console.log('key down')}
        onKeyUp={() => console.log('key up')}
        direction="down"
        label="스크롤 다운"
      />
      <GoToButton
        onClick={() => {
          console.log('go to up');
        }}
        direction="up"
        label="스크롤 업"
      />
    </div>
  );
}
export default Controller;
