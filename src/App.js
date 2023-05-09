import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import NotFound from './component/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<DayList/>}/>
          <Route path='/day/:inputDay' element={<Day/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
