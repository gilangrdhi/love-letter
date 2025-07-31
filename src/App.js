import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Envelope from './components/Envelope';
import LoveConfess from './components/LoveConfess';
import LoveGallery from './components/LoveGallery';
import CommitForm from './components/CommitForm';
import FinalPage from './components/FinalPage';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <Router>
      <BackgroundMusic /> 
      <Routes>
        <Route path="/" element={<Envelope />} />
        <Route path="/love" element={<LoveConfess />} />
        <Route path="/gallery" element={<LoveGallery />} />
        <Route path="/commit" element={<CommitForm />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
