import styles from './Switcher.module.css';

function Switcher({
  on = false,
  onLabel = '',
  offLabel = '',
  size = 'sm', // sm, md, lg
  ...restProps
}) {
  return (
    <button
      type="button"
      className={`${styles.Switcher} ${styles[size]} ${
        on ? styles.on : ''
      }`.trim()}
      {...restProps}
    >
      <span className={styles.handle}>{on ? onLabel : offLabel}</span>
    </button>
  );
}

<Switcher />;

export default Switcher;
