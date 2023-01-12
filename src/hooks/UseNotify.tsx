import React, { useContext } from "react";
import { ClipboardContext } from "../store/ClipboardContext";

const useNotify = () => {
	const ctx = useContext(ClipboardContext);
	const isSuccess = Math.floor(Math.random() * 10) < 6

	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const target = event.target as HTMLElement;
		const dataToCopy = (target.previousElementSibling as HTMLElement)
			.innerHTML;

		if (ctx !== null) {
			ctx.saveClipboardData(dataToCopy, isSuccess);
			console.log("dataToCopy", dataToCopy);
			console.log("ctx z notify", ctx);
			if (isSuccess) {
				navigator.clipboard.writeText(dataToCopy);
			}
		}
	};
	return {
		notify,
	};
};

export default useNotify;
