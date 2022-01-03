import {Route, Switch} from 'react-router-dom';

import FileUpload from './Pages/FileUpload';
import Home from './Pages/Home';
import Layout from './Components/Layout';

function App() {
  return (
  <Layout>
  <Switch>
    <Route path='/' exact><Home/></Route>
    <Route path='/batchprocessing'><FileUpload/></Route>
  </Switch>
  </Layout>
  );
}

export default App;
