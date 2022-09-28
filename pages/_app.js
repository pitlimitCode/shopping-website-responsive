import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';

import { Provider } from 'react-redux'
import { store, persistor } from '../components/redux'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
			  <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp