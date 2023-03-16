import PropTypes from 'prop-types';
import StatisticElement from './StatisticElement';
import getRandomHexColor from 'utils/getRandomColor';

export default function StatisticsList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(elem => (
        <li
          key={elem.id}
          className="item"
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <StatisticElement elem={elem} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  id: PropTypes.string.isRequired,
};
