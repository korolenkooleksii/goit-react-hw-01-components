import PropTypes from 'prop-types';
import StatisticElement from './StatisticElement';
import css from './Statistics.module.css';
export default function StatisticsList({ stats }) {
  return (
    <ul className={css['stat-list']}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticElement key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
