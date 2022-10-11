import './App.scss';
import PeopleList from './components/peopleList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PeopleDetails from './components/peopleDetails';
import Home from './components/home';
import List from './components/list';
import Details from './components/details';
import NotFound from './components/notFound';


const filmsList = ['/films', 'title', ['people', 'species', 'starships', 'vehicles', 'planets']]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='people'>
          <Route path=':id' element={<PeopleDetails/>}/>
          <Route index element={<PeopleList />} />
        </Route>
        <Route path='films' >
          <Route path=':id' element={<Details detailsUrl={filmsList[0]} axiosList={filmsList[2]}/>}/>
          <Route index element={<List listUrl={filmsList[0]} listTitle={filmsList[1]} />} />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
