import css from './Friends.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={css[`${isOnline ? 'activ' : 'inactiv'}`]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}
