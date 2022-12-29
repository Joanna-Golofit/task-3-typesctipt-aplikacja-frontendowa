import React, { useContext } from "react";
import { Locations } from "../models";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./AboutUs.module.css";
import CopyButton from "../components/CopyButton";
import { notify } from "../helpers/helpers";
// import ClipboardContext from "../store/ClipboardContext";
interface Props {
	locations: Locations[];
	// jakasFunkcja: () => void;
	// jakasFunkcja: (e: React.FormEvent) => void;
}

// e: React.FormEvent

const AboutUs: React.FC<Props> = ({ locations }: Props) => {
	// const ctx = useContext(ClipboardContext);

	// const isRequestSuccess: boolean = true;

	// 	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => { // jak mozna inaczej to obejsc?
	// 	const target = (event.target as HTMLLIElement);
	// 	const dataToCopy = (target.previousElementSibling as HTMLLIElement)
	// 		.innerHTML;
	// 	console.log(
	// 		"target",
	// 		(target.previousElementSibling as HTMLLIElement).innerHTML
	// 	);
	// 	toast.success("Copy to clipboard succeeded", {
	// 		theme: "dark",
	// 	});
	// 	console.log("clg", dataToCopy);
	// 	navigator.clipboard.writeText(dataToCopy);
	// };

	// console.log("ctx", ctx);

	return (
		<div>
			<h1>AboutUs</h1>
			{/* <CopyButton /> */}
			{/* <p>{ctx.isRequestSuccess ? "true" : "false"}</p>
			{ctx.isRequestSuccess && <CopyButton onClick={notify} />}
			{!ctx.isRequestSuccess && <p>ooo</p>} */}
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
							className={classes.button}
							title="Click to copy to the clipboard"
							onClick={notify}
						>
							copy
						</button>
					</li>
				))}
			</ul>
			{/* <ToastContainer autoClose={3000} closeOnClick position="bottom-right" /> */}
		</div>
	);
};

export default AboutUs;
