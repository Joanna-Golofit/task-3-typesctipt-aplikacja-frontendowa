import React from "react";
import CopyButton from "../components/CopyButton";
import useNotify from "../hooks/UseNotify";

const Contact: React.FC = () => {
	const { notify } = useNotify();

	return (
		<div>
			<h1>Contact</h1>
			<a href="mailto:fp@fp.com">fp@fp.com</a>
			<CopyButton onClick={notify} />
			<br />
			<a href="tel:+48123123123">+48 123 123 123</a>
			<CopyButton onClick={notify} />
			<br />
			Dodaj możliwość kopiowania tych danych do schowka (osobno nr tel osobno
			mail) <b>za pomocą buttona kopiowania</b>
		</div>
	);
};

export default Contact;
