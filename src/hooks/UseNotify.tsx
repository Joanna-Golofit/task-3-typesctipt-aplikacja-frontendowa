import React, { useContext } from "react";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ClipboardContext } from "../store/ClipboardContext";

const useNotify = () => {
	const ctx = useContext(ClipboardContext);

	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const target = event.target as HTMLElement;
		const dataToCopy = (target.previousElementSibling as HTMLElement)
			.innerHTML;

			// if (ctx !== null && ctx.clipboardData.isRequestSuccess) {
		if (ctx !== null) {
			ctx.saveClipboardData(dataToCopy);
			console.log("dataToCopy", dataToCopy);
			console.log("ctx z opoznieniem?", ctx.clipboardData.copiedDataList);
			// async await if ctx.clipboardData.copiedDataList ma isRequestSuccess true to zapisujemy do clipboardu
			navigator.clipboard.writeText(dataToCopy);
		}

	navigator.clipboard.writeText(dataToCopy);
	};
	return {
		notify,
	};
};

export default useNotify;
