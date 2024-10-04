import { Provider } from 'react-redux'
import store from './redux/Store/Store.jsx'
import CakeContainers from './Components/CakeContainers'
import './App.css'

function App() {

  return (
    <Provider store={store}>
    <div>
      <CakeContainers />
    </div>
    </Provider>
  )
}

export default App
