import React from "react";
import useClipboardAndNotification from "../hooks/use-clipboard-and-notification";
import classes from "./Home.module.css";

const Home: React.FC = () => {
	const { copyButton, ToastContainer } = useClipboardAndNotification();

	return (
		<div>
			<h1>Welcome to FP!</h1>
			<section>
				Dodaj tutaj losową treść wg patternu:
				<article>
					<h2 className={classes.header}>Człowiek nie robot!</h2>
					{copyButton}
					<span>
						zawartością treści w paragrafie pod headingiem.... zawartością
						treści w paragrafie pod headingiem. Zawartością treści w paragrafie
						pod headingiem, zawartością treści w paragrafie pod headingiem..
						zawartością treści w paragrafie pod headingiem.... zawartością
						treści w paragrafie pod headingiem. Zawartością treści w paragrafie
						pod headingiem, zawartością treści w paragrafie pod headingiem..
					</span>
					{copyButton}
				</article>
				<br />
				<b>
					Przy headingu dodaj button/iconę kopiowania - po kliku powinna wykonać
					się akcja kopiowania treści z paragrafu do schowka a następnie
					komunikat o skopiowaniu
				</b>
			</section>
			{ToastContainer}
		</div>
	);
};

export default Home;
