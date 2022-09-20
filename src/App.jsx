import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import RouterNavBar from './components/NavBar/RouterNavBar';
import Classable from './pages/projects/classable';
import LandingPage from './pages/landingPage';
import ChatApp from './pages/projects/chatApp';

function App() {
  return (
    <>
      <div className="star-bg"></div>
      <div className="transition-all duration-500 overflow-hidden bg-bgLight md:px-5 dark:bg-bgDark">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/projects" element={<RouterNavBar />}>
            <Route path="classable" element={<Classable />} />
            <Route path="chat-app" element={<ChatApp />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
