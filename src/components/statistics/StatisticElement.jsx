import css from './Statistics.module.css';
import getRandomHexColor from 'utils/getRandomColor';

export default function StatisticElement({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}
