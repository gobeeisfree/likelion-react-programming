import { arrayOf, number, string } from 'prop-types';
function Spinner({
  size = 200,
  message = '로딩 중...',
  colors = ['#93dbe9', '#689cc5', '#5e6fa3'],
  ...restProps
}) {
  return (
    <svg
      width={size}
      height={size}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      {...restProps}
    >
      <title>{message}</title>
      <circle cx="80" cy="50" r="5" fill={colors[0]}>
        <animate
          attributeName="cx"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="80;35.00000000000001"
        ></animate>
        <animate
          attributeName="cy"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="50;75.98076211353316"
        ></animate>
        <animate
          attributeName="fill"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values={`${colors[0]};${colors[1]}`}
        ></animate>
      </circle>
      <circle cx="35" cy="75.981" r="5" fill={colors[1]}>
        <animate
          attributeName="cx"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="35.00000000000001;34.999999999999986"
        ></animate>
        <animate
          attributeName="cy"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="75.98076211353316;24.019237886466847"
        ></animate>
        <animate
          attributeName="fill"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values={`${colors[1]};${colors[2]}`}
        ></animate>
      </circle>
      <circle cx="35" cy="24.019" r="5" fill={colors[2]}>
        <animate
          attributeName="cx"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="34.999999999999986;80"
        ></animate>
        <animate
          attributeName="cy"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="24.019237886466847;49.99999999999999"
        ></animate>
        <animate
          attributeName="fill"
          dur="1.282051282051282s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values={`${colors[2]};${colors[0]}`}
        ></animate>
      </circle>
    </svg>
  );
}

Spinner.propTypes = {
  size: number,
  message: string,
  colors: arrayOf(string),
};

export default Spinner;
