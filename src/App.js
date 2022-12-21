
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { loadAllCategory, loadAllDisplayDiary } from './api/functions';
import './App.css';
import TopHeader from './components/TopHeader';
import { CategoryPage, DiaryPage, HomePage, ResultSearchPage, AuthenPage, NewDiaryPage, ActiveUser } from './screens';
import { useStore } from './store';
import { load_all_diaries, load_category } from './store/actions';

function App() {
  const [state, dispatch] = useStore()

  useEffect(()=>{
    const loadDiary = async () => {
      const result = await loadAllDisplayDiary();
      dispatch(load_all_diaries(result.content))
    }

    const loadCategory = async () => {
      const result = await loadAllCategory();
      dispatch(load_category(result))
    }

    loadCategory()
    loadDiary()
  },[])


  return (
    <div className="App w-full">
      <TopHeader />
      <div className='container m-auto flex flex-row gap-3' >

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/diary/id=:id' element={<DiaryPage />} />
        <Route path='/category/id=:id' element={<CategoryPage />} />
        <Route path='/search/result' element={<ResultSearchPage />} />
        <Route path='/authen' element={<AuthenPage />} />
        <Route path='/diary/new' element={<NewDiaryPage />} />
        <Route path='/active/key=:key' element={<ActiveUser />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
