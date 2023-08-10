import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout(props) {
  // React API
  // return React.createElement(
  //   type,
  //   // props,
  //   // ...children
  //   // [child, child, child]
  // )

  // JSX
  // children = []
  return [
    <HeaderBar key="header-bar" />,
    <main key="main">{props.children}</main>,
    <FooterBar key="footer-bar" />,
  ];
}

export default RootLayout;
