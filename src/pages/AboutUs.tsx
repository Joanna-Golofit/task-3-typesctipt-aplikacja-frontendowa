import React, { useContext } from "react";
import { Locations } from "../models";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./AboutUs.module.css";
import CopyButton from "../components/CopyButton";
import useNotify from "../hooks/UseNotify";
import {ClipboardContext} from "../store/ClipboardContext";
interface Props {
	locations: Locations[];
	// jakasFunkcja: (e: React.FormEvent) => void;
}

const AboutUs: React.FC<Props> = ({ locations }: Props) => {
		const { notify } = useNotify();

	const ctx = useContext(ClipboardContext);
	// const {
	// 	clipboardData,
	// 	saveClipboardData,
	// 	saveClipboardDataErr,
	// 	list,
	// 	showToast,
	// } = ctx; Property 'saveClipboardDataErr' does not exist on type 'ClipboardContextType | null'.ts(2339)

	// console.log("ctx about", ctx);

	return (
		<div>
			<h1>AboutUs</h1>
			{/* <p>{ctx.isRequestSuccess ? "true" : "false"}</p>
			{ctx.isRequestSuccess && <CopyButton onClick={notify} />}
			{!ctx.isRequestSuccess && <p>ooo</p>} */}
			
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
						<CopyButton onClick={notify} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default AboutUs;
