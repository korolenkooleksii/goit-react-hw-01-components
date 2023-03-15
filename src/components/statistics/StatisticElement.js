import PropTypes from 'prop-types';

export default function StatisticElement({ elem: { label, percentage } }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}

StatisticElement.protTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};