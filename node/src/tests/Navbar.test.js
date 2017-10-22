import Navbar from '../components/Navbar';

it('renders without crashing', () => {
	const div = document.createElement('div');
	new Navbar({element: 'div'});
});
