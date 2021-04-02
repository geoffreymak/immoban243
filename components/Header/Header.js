import TopBar from './TopBar';
import NavBar from './NavBar';

export default function Header() {
	return (
		<header id="header-wrap">
			<TopBar />
			<NavBar />
			<div className="clearfix"></div>
		</header>
	);
}