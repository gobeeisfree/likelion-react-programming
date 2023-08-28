import { any, bool, node, objectOf, oneOf } from 'prop-types';
import S from './Button.module.css';

export function Button({
  secondary = false,
  type = 'button',
  children,
  ...restProps
}) {
  return (
    <button
      type={type}
      className={secondary ? S.secondary : S.primary}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  secondary: bool,
  type: oneOf(['submit', 'reset', 'button']),
  children: node.isRequired,
  restProps: objectOf(any),
};

Button.Group = function ButtonGroup({ children }) {
  return <div className="mt-5 flex gap-2">{children}</div>;
};

Button.Group.propTypes = {
  children: node,
};
