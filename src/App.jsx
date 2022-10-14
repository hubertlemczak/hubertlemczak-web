import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import RouterNavBar from './components/NavBar/RouterNavBar';
import Classable from './pages/projects/classable';
import LandingPage from './pages/landingPage';
import ChatApp from './pages/projects/chatApp';
import Cathort6 from './pages/projects/cathort-6';

function App() {
  return (
    <>
      <div className="star-bg"></div>
      <div className="transition-all duration-500 bg-bgLight dark:bg-transparent">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/projects" element={<RouterNavBar />}>
            <Route path="classable" element={<Classable />} />
            <Route path="chat-app" element={<ChatApp />} />
            <Route path="cathort-6" element={<Cathort6 />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
