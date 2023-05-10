import './App.css';


import MovieModule from './modules/movieModule';
import store from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
   
 <Provider store={store}>
       {/* <LoginForm /> */}
       <div className="App">
    <MovieModule></MovieModule>
    
    </div>
 </Provider>
  );
}

export default App;
