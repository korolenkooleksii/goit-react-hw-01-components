import css from './Statistics.module.css';

export default function StatisticElement({ label, percentage } ) {
  return (
    <>
      <span className={css.label }>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </>
  );
}

