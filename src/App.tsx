import styled, {} from 'styled-components';
import { GlobalStyle } from './asserts/styles/global/globalStyles';
import Component from './components/organisms/comment/comment';
import data from './asserts/data/data.json';

const Wrapp = styled.main `
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  `

const App: React.FC = () => {
  return (
    <Wrapp>
      {console.log(data.comments[0])}
      <GlobalStyle/>
      <Component  content= {data.comments[0].content}
                  username= {data.comments[0].user.username}
                  createdAt= {data.comments[0].createdAt}
                  score={data.comments[0].score} 
                  userImage= {data.comments[0].user.image.png} />
    </Wrapp>
  );
}

export default App;
