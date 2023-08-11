import GoToButton from './GoToButton';
import { getElem } from '@/utils';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton
        onClick={() => {
          const practiceElement = getElem('.Practice');
          console.log(practiceElement);
        }}
        direction="down"
        label="스크롤 다운"
      />
      <GoToButton
        onClick={() =>
          getElem('.Practice').scroll({ top: 0, behavior: 'smooth' })
        }
        direction="up"
        label="스크롤 업"
      />
    </div>
  );
}
export default Controller;
