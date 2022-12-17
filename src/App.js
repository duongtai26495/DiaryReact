
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { loadAllDisplayDiary } from './api/functions';
import './App.css';
import TopHeader from './components/TopHeader';
import { DiaryPage, HomePage } from './screens';
import { useStore } from './store';
import { load_all_diaries } from './store/actions';


function App() {
  const [state, dispatch] = useStore()

  useEffect(()=>{
    const loadDiary = async () => {
      const result = await loadAllDisplayDiary();
      dispatch(load_all_diaries(result.content))
    }

    loadDiary()
  },[])


  return (
    <div className="App w-full">
      <TopHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/diary/id=:id' element={<DiaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
