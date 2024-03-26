import logo from "../../assets/logo-footer.svg";


export default function Footer() {
	return (
		<footer className="footer-container">
			<img src={logo} alt="logo de kasa" />
			<p className="footer-container-text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}