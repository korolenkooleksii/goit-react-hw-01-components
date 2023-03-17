import PropTypes from 'prop-types';
import defaultimage from '../defaultimage.jpg';
import css from './Profile.module.css';
export default function Profile(props) {
  const {
    username = 'no name',
    tag,
    location,
    foto = defaultimage,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={foto} alt="User avatar" className={css.avatar} width="370" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  foto: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
