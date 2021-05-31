import { ROUTES_DATA } from '../../config/routes';
import HomeItem from './HomeItem';
import './Home.css';

function Home() {
  return (
    <main className='home'>
      <h1>Welcome to NEOGCAMP BASICS PROJECTS</h1>
      <ul className='projects-wrapper'>
        {ROUTES_DATA.map(({ path, name }, i) => (
          <HomeItem key={path + i} path={path} name={name} />
        ))}
      </ul>
    </main>
  );
}

export default Home;
