// import React from "react";
import CopyButton from "../components/CopyButton";
// // import useClipboardAndNotification from "../hooks/use-clipboard-and-notification";
import useNotify from "../hooks/UseNotify";
import classes from "./Home.module.css";

const Home: React.FC = () => {
	const { notify } = useNotify();

	return (
		<div>
			<h1>Welcome to FP!</h1>
			<section>
				<article>
					<h2 className={classes.header}>Człowiek nie robot!</h2>
					<CopyButton onClick={notify} />
					<span>
						zawartością treści w paragrafie pod headingiem.... Przy headingu
						dodaj button/iconę kopiowania - po kliku powinna wykonać się akcja
						kopiowania treści z paragrafu do schowka a następnie komunikat o
						skopiowaniu... zawartością treści w paragrafie pod headingiem.
						Zawartością treści w paragrafie pod headingiem, zawartością treści w
						paragrafie pod headingiem.. zawartością treści w paragrafie pod
						headingiem.... zawartością treści w paragrafie pod headingiem.
						Zawartością treści w paragrafie pod headingiem, zawartością treści w
						paragrafie pod headingiem..
					</span>
					<CopyButton onClick={notify} />
				</article>
			</section>
		</div>
	);
 };

export default Home;
