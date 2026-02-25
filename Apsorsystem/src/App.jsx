import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Layout/Navigation';
import Homepage from './Components/Pages/Public/Homepage';
import Userprofile from './Components/Pages/Public/proflie/Userprofile';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage className="bg-gray-100 mt-40" />} />
        <Route path="/userprofile" element={<Userprofile />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;