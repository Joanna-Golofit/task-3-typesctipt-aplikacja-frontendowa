// import React, { useContext } from "react";
import { toast } from "react-toastify";
// import CopyToClipboardContext from "../store/CopyToClipboardContext";

// const copyToClipboardCtx = useContext(CopyToClipboardContext);





// a jak tu uzyc copyToClipboardCtx - trzeba zmienic funkcje z hooka, albo ta funkcje wrzucic do CopyButton?




export const notify = (
	event: React.MouseEvent<HTMLElement, MouseEvent>,
	// copyToClipboardCtx: boolean
) => {
	// jak mozna inaczej to obejsc?

	const target = event.target as HTMLLIElement;
	const dataToCopy = (target.previousElementSibling as HTMLLIElement).innerHTML;
	console.log(
		"target",
		(target.previousElementSibling as HTMLLIElement).innerHTML
	);
	// console.log("ctx", copyToClipboardCtx);
	// if (isRequestSuccess) {
	toast.success("Copy to clipboard succeeded", {
		theme: "dark",
	});
	console.log("clg", dataToCopy);
	navigator.clipboard.writeText(dataToCopy);
	// }
};
