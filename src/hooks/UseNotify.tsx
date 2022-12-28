import React, { useContext } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CopyToClipboardContext from "../store/CopyToClipboardContext";

// Button -> onClick, classNames, title
// useClipboardAndNotification.tsx

//  <>
// <About>
// <home>
// {
// 	isActive && <Toast>
// }
// </>

// jak ustawić style z tego poziomu zeby button pojawiał sie dobiero przy hoverze na element nadrzedny?

const UseNotify = () => {
	const ctx = useContext(CopyToClipboardContext);

	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const target = event.target as HTMLLIElement;
		const dataToCopy = (target.previousElementSibling as HTMLLIElement)
			.innerHTML;

		if (ctx.isRequestSuccess) {
			console.log(
				"success",
				(target.previousElementSibling as HTMLLIElement).innerHTML
			);
			toast.success("Copy to clipboard succeeded", {
				theme: "dark",
			});
		} else {
				console.log(
					"not",
					(target.previousElementSibling as HTMLLIElement).innerHTML
				);
				toast.error("Copy to clipboard failed", {
					theme: "dark",
				});
		}

		// i nie wiem jak zrobić zeby  dac info o errorze..kiedy jest error ? po czym to poznac? ;p
		// toast.error("Copy to clipboard failed");

		console.log("clg", dataToCopy);
		navigator.clipboard.writeText(dataToCopy);
	};
	return {
		notify,
		// copyButton: (
		//   <>
		//     <button
		//       style={styles.copyButton}
		//       title="Click to copy to the clipboard"
		//       onClick={notify}
		//       >
		//       Copy
		//     </button>
		//     <br/>
		//   </>
		// ),
		// ToastContainer: (
		// 	<ToastContainer autoClose={3000} closeOnClick position="bottom-right" />
		// ),
	};
};

export default UseNotify;
