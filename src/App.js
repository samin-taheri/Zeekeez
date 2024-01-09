import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Routers from './routers';
function App() {
  return (
    <>
      <Header />
      <Main>
        <Routers />
      </Main>
    </>
  );
}

export default App;
