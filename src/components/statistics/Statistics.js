import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/getRandomColor';
import './Statistics.css';

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
