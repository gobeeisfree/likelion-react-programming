import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout(props) {
  return (
    <div>
      <HeaderBar />
      <main>
        {props.children}
      </main>
      <FooterBar />
    </div>
  );
}

export default RootLayout;