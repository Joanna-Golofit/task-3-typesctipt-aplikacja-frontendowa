import React from 'react'
import { Locations } from '../models';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import classes from './AboutUs.module.css';
interface Props {
	locations: Locations[];
	// jakasFunkcja: () => void;
	// jakasFunkcja: (e: React.FormEvent) => void;
}

// e: React.FormEvent

const AboutUs: React.FC<Props> = ({ locations }: Props) => {
	// const notify = (event: React.ChangeEvent<HTMLLIElement>) => {
	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		// const notify = (event: React.MouseEventHandler<HTMLInputElement>) => {
		// const notify = (e: HTMLInputElement) => {
		// const notify = (e: { target: HTMLInputElement }) => {
		// const li = event.target;
		// console.log(li);
		const value = (event.target as HTMLLIElement).innerHTML;
		// console.log((event.target as HTMLLIElement).innerHTML);
		// toast.success("Copy to clipboard succeeded", {
		// 	theme: "dark",
		// });
		toast.success(value, {
			theme: "dark",
		});
	};
	// const notify2 = () => toast.error("Copy to clipboard failed!");

	// toast.error("Lorem ipsum dolor");
	// toast.success("Lorem ipsum dolor");

	return (
		<div>
			{/* <button onClick={notify}>Notify!</button> */}
			<ToastContainer autoClose={3000} closeOnClick position="bottom-right" />
			<h1>AboutUs</h1>
			<b>
				Każda lokalizacja powinna posiadać możliwość skopiowania jej do schowka
				przy pomocy buttona/icony kopiowania
			</b>
			{/* <input onClick={notify}></input> */}
			<ul>
				{locations.map(location => (
					<li
						className={classes.location}
						title="Click to copy to the clipboard"
						key={location.zip}
						onClick={notify}
					>
						{location.country} {location.street} {location.zip} {location.city}
						{/* {`${location.country} ${location.street} ${location.zip} ${location.city}`} */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default AboutUs