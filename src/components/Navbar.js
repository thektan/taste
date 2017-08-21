import JSXComponent from 'metal-jsx';

class Navbar extends JSXComponent {
	render() {
		return (
			<ul role="navigation">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		);
	}
}

export default Navbar;
