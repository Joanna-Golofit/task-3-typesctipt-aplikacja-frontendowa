import React from "react";
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
	
	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const target = (event.target as HTMLLIElement);
		// const value = (event.target as HTMLLIElement).innerHTML;
		const dataToCopy = (target.previousElementSibling as HTMLLIElement)
			.innerHTML;
		// console.log("clg", event.target.previousSibling.innerHTML);
		console.log("target", (target.previousElementSibling as HTMLLIElement).innerHTML);
		toast.success("Copy to clipboard succeeded", {
			theme: "dark",
		});
		console.log("clg", dataToCopy);
		// setText(value);
		navigator.clipboard.writeText(dataToCopy);
		// toast.success(value, {
		// 	theme: "dark",
		// });
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
						key={location.zip}
						
						// onClick={event => {
							// 	setText((event.target as HTMLLIElement).innerHTML);
							// 	console.log((event.target as HTMLLIElement).innerHTML);
						// }}
					>
						{/* {location.country} {location.street} {location.zip}	{location.city} */}
						<span className="DataToCopy">
							{`${location.country} ${location.street} ${location.zip} ${location.city}`}
						</span>
						<button
							title="Click to copy to the clipboard"
							onClick={notify}> copy</button>
					</li>
				))}
			</ul>
			<ToastContainer autoClose={3000} closeOnClick position="bottom-right" />
		</div>
	);
};

export default AboutUs;
