import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgramList from './components/ProgramList';
import ProgramDetails from './components/ProgramDetails';
import AudioPlayer from './components/AudioPlayer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProgramList />} />
                <Route path="/program/:id" element={<ProgramDetails />} />
                <Route path="/program/:id/track/:trackId" element={<AudioPlayer />} />
            </Routes>
        </Router>
    );
}

export default App;
