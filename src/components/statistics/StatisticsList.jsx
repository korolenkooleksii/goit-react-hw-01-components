import PropTypes from 'prop-types';
import StatisticElement from './StatisticElement';
import getRandomHexColor from 'utils/getRandomColor';
import css from './Statistics.module.css';
export default function StatisticsList({ stats }) {
  return (
    <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <StatisticElement label={label} percentage={percentage} />
        </li>
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
