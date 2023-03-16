import Profile from './profile/Profile';
import user from '../patch/to/user.json';
import Statistics from './statistics/Statistics';
import data from '../patch/to/data.json';

export default function App() {
  return (
    <div>
      <h2>Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        foto={user.avatar}
        stats={user.stats}
      />
      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}
