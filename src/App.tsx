import { SingIn } from './components/organisms/Register/SingIn';
import { SingUp } from './components/organisms/Register/SingUp';
import { Comments } from './components/templates/Comments';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

const App: React.FC = () => {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Comments/>}/>
        <Route path={"/SingUp"} element={<SingUp/>}/>
        <Route path={"/SingIn"} element={<SingIn/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;