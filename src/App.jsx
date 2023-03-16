import Profile from './components/profile/Profile';
import user from './patch/to/user.json';
import Statistics from './components/statistics/Statistics';
import data from './patch/to/data.json';


export default function App() {
  return (
    <div>
      <h2>Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        foto={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}
