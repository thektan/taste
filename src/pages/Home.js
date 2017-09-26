import JSXComponent from 'metal-jsx';
import Place from '../components/Place';

class Home extends JSXComponent {
	render() {
		return (
			<div>
				<h1>Home</h1>

				<Place />
			</div>
		);
	}
}

export default Home;
