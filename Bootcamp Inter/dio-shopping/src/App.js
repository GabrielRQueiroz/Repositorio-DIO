import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import store from './components/Store';
import Routes from './routes';

const App = () => {
	const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'));

	if (localCart !== null) {
		store.dispatch({ type: 'CHANGE_CART', localCart });
	}

	return (
		<Provider store={store}>
			<Container className='h-100'>
				<Router>
					<Header />
					<Container fluid>
						<Routes />
					</Container>
				</Router>
			</Container>
		</Provider>
	);
};

export default App;
