import React, { useState } from "react";
import { Locations } from "../models";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./AboutUs.module.css";
interface Props {
	locations: Locations[];
	// jakasFunkcja: () => void;
	// jakasFunkcja: (e: React.FormEvent) => void;
}

// e: React.FormEvent

const AboutUs: React.FC<Props> = ({ locations }: Props) => {
	// const [text, setText] = useState("Copy this text to clipboard");
	// const [isCopied, setIsCopied] = useState(false);
	// const notify = (event: React.ChangeEvent<HTMLLIElement>) => {
	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const value = (event.target as HTMLLIElement).innerHTML;
		// toast.success("Copy to clipboard succeeded", {
		// 	theme: "dark",
		// });
		console.log("clg", value);
		// setText(value);
		navigator.clipboard.writeText(value);
		toast.success(value, {
			theme: "dark",
		});
		// setIsCopied(true);
		// setTimeout(() => {
		// 	setIsCopied(false);
		// }, 1000);
	};

	// const notify2 = () => toast.error("Copy to clipboard failed!");

	// toast.error("Lorem ipsum dolor");
	// toast.success("Lorem ipsum dolor");

	return (
		<div>
			<h1>AboutUs</h1>
			<b>
				Każda lokalizacja powinna posiadać możliwość skopiowania jej do schowka
				przy pomocy buttona/icony kopiowania
			</b>

			<ul>
				{locations.map(location => (
					<li
						className={classes.location}
						title="Click to copy to the clipboard"
						key={location.zip}
						onClick={notify}
						// onClick={event => {
						// 	setText((event.target as HTMLLIElement).innerHTML);
						// 	console.log((event.target as HTMLLIElement).innerHTML);
						// }}
					>
						{/* {location.country} {location.street} {location.zip}	{location.city} */}
						<p>
							{`${location.country} ${location.street} ${location.zip} ${location.city}`}
						</p>
					</li>
				))}
			</ul>
			<ToastContainer autoClose={3000} closeOnClick position="bottom-right" />
		</div>
	);
};

export default AboutUs;
