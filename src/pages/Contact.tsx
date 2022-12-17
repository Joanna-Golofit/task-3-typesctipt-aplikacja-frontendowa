import React from 'react'
import useClipboardAndNotification from '../hooks/use-clipboard-and-notification';

const Contact: React.FC = () => {
	const { copyButton, ToastContainer } = useClipboardAndNotification();

	return (
		<div>
			<h1>Contact</h1>
			<a href="mailto:fp@fp.com">fp@fp.com</a>
			{copyButton}
			<br />
			<a href="tel:+48123123123">+48 123 123 123</a>
			{copyButton}
			<br />
			Dodaj możliwość kopiowania tych danych do schowka (osobno nr tel osobno
			mail) <b>za pomocą buttona kopiowania</b>
			{ToastContainer}
		</div>
	);
};

export default Contact