import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPlanner from './components/TaskPlanner';
// import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPlanner />} />
        {/* <Route path="/expenses" element={<ExpenseTracker />} /> */}
      </Routes>
    </Router>
  );
}

export default App;