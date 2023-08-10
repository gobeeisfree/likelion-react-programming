import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout(props) {
  return (
    <>
      <HeaderBar />
      <main>{props.children}</main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
