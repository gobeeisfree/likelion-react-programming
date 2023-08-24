export function string(props, propName, componentName) {
  const propValue = props[propName];
  const propType = typeof propValue;
  if (propType !== 'string' && propType !== 'undefined') {
    throw new Error(`
      ${componentName} 컴포넌트 ${propName} 속성(prop) 타입의 기대값은 string 또는 undefined 입니다.
      하지만 전달된 ${propName} 속성 타입은 ${propType.toString()}입니다.
    `);
  }
}

// manual prop validation
const PropTypes = {
  string,
};

export default PropTypes;
