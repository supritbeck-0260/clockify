import './App.css';
import SideNav from './components/SideNav';
import TimeTracker from './components/TimeTracker';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <div className='main-content'>
          <SideNav />
          <TimeTracker />
      </div>
     
    </div>
  );
}

export default App;
