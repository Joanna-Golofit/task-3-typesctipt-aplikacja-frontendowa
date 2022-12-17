import React, { useState } from "react";
import { Locations } from "../models";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./AboutUs.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface Props {
	locations: Locations[];
	// jakasFunkcja: () => void;
	// jakasFunkcja: (e: React.FormEvent) => void;
}

// e: React.FormEvent

const AboutUs: React.FC<Props> = ({ locations }: Props) => {
	// const [copied, setCopied] = useState(false);
	const [copiedValue, setCopiedValue] = useState("proba");
	// const notify = (event: React.ChangeEvent<HTMLLIElement>) => {
	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const value = (event.target as HTMLLIElement).innerHTML;
		// toast.success("Copy to clipboard succeeded", {
		// 	theme: "dark",
		// });
		console.log("clg", value);
		setCopiedValue(value);
		toast.success(value, {
			theme: "dark",
		});
	};

	// const notify2 = () => toast.error("Copy to clipboard failed!");

	// toast.error("Lorem ipsum dolor");
	// toast.success("Lorem ipsum dolor");

	return (
		<div>
			<ToastContainer autoClose={3000} closeOnClick position="bottom-right" />
			<h1>AboutUs</h1>
			<b>
				Każda lokalizacja powinna posiadać możliwość skopiowania jej do schowka
				przy pomocy buttona/icony kopiowania
			</b>

			<CopyToClipboard
				text={copiedValue}
				onCopy={copiedValue => {
					// setCopiedValue(event);
					toast.success("Copy to clipboard succeeded", {
						theme: "dark",
					});
					console.log("CopyToClipboard", copiedValue);
				}}
			>
				{/* <span>Copy to clipboard </span> */}
				<ul>
					{locations.map(location => (
						<li
							className={classes.location}
							title="Click to copy to the clipboard"
							key={location.zip}
							// onClick={notify}
							onClick={event => {
								setCopiedValue((event.target as HTMLLIElement).innerHTML);
								console.log((event.target as HTMLLIElement).innerHTML);
							}}
						>
							{/* {location.country} {location.street} {location.zip}	{location.city} */}
							<p>
								{`${location.country} ${location.street} ${location.zip} ${location.city}`}
							</p>
						</li>
					))}
				</ul>
			</CopyToClipboard>
		</div>
	);
};

export default AboutUs;
