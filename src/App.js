import React from 'react';
import Navbar from './NavBar';
import Tracker from './Tracker';
import TrackerLogin from './TrackerLogin';
import ThemeContextProvider from './context/ThemeContext';
import LanguageContextProvider from './context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import CourseList from './CourseList';
function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Tracker />
        <TrackerLogin />
     </LanguageContextProvider>
    </div>
  );
}
export default App;
