import { SingIn } from './components/organisms/Register/SingIn';
import { SingUp } from './components/organisms/Register/SingUp';
import { Comments } from './components/templates/Comments';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

const App: React.FC = () => {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={"/interactive-comments-section"} element={<Comments/>}/>
        <Route path={"/interactive-comments-section/SingUp"} element={<SingUp/>}/>
        <Route path={"/interactive-comments-section/SingIn"} element={<SingIn/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;