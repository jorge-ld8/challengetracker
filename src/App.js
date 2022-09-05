import './App.css';
import FilterableChallengeList from './components/FilterableChallengeList';
import MainBar from './components/MainBar';
import ChallengeView from './components/ChallengeView';

const challengeList = [
  {
    id: 1,
    name: "No Sugar",
    guideline: "Sugar free diet for the next 30 days ",
    start_date: new Date(2022, 8, 26),
    end_date: new Date(2022, 8, 30),
    state: "Active",
  },
  {
    id: 2,
    name: "No Fap",
    guideline: "No Fapping for the next 30 days",
    start_date: new Date(2022, 11, 28),
    end_date: new Date(2023, 0, 28),
    state: "Completed",
  }                    
];

function App() {
  return (
    <div className="App">
      <FilterableChallengeList challengesList={challengeList}/>
      <ChallengeView />
      <MainBar />
    </div>
  );
}

export default App;
