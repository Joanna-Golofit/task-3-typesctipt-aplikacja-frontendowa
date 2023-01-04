import React, { useContext } from "react";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ClipboardContext } from "../store/ClipboardContext";

const useNotify = () => {
	const ctx = useContext(ClipboardContext);

	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const target = event.target as HTMLLIElement;
		const dataToCopy = (target.previousElementSibling as HTMLLIElement)
			.innerHTML;

			// if (ctx !== null && ctx.clipboardData.isRequestSuccess) {
		if (ctx !== null) {
			ctx.saveClipboardData(dataToCopy);
			console.log("dataToCopy", dataToCopy);
			console.log("ctx z opoznieniem", ctx);
			navigator.clipboard.writeText(dataToCopy);
		}

		// if (ctx !== null && !ctx.clipboardData.isRequestSuccess) {
		// 	ctx.saveClipboardDataErr();
		// 	console.log("no dataToCopy");
		// }

		// 		if (ctx.isRequestSuccess) {
		// 			console.log(
		// 				"success",
		// 				(target.previousElementSibling as HTMLLIElement).innerHTML
		// 			);
		// 			toast.success("Copy to clipboard succeeded", {
		// 				theme: "dark",
		// 				pauseOnFocusLoss: false,
		// 			});
		// 		} else {
		// 			console.log(
		// 				"not",
		// 				(target.previousElementSibling as HTMLLIElement).innerHTML
		// 			);
		// 			toast.error("Copy to clipboard failed", {
		// 				theme: "dark",
		// 				pauseOnFocusLoss: false,
		// 			});
		// 		}

		// 		console.log("clg", dataToCopy);
		// 		navigator.clipboard.writeText(dataToCopy);
	};
	return {
		notify,
	};
};

export default useNotify;
