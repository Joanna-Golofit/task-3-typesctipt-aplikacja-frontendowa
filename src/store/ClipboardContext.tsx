import React, { useState } from "react";
import {
	IClipboardData,
	IClipboardProviderProps,
	IClipboardContextType,
	ICopiedDataList,
} from "../models";

const initialClipboardData: IClipboardData = {
	copiedDataList: [],
};

export const ClipboardContext = React.createContext<IClipboardContextType>(
	{} as IClipboardContextType
);

export const ClipboardProvider = ({ children }: IClipboardProviderProps) => {
	const [clipboardData, setClipboardData] = useState(initialClipboardData);

	const saveClipboardData = (text: string, isSuccess: boolean) => {
		setClipboardData({
			copiedDataList: [
				{
					id: Math.floor(Math.random() * 100000),
					text: text,
					isRequestSuccess: isSuccess,
				},
				...clipboardData.copiedDataList,
			],
		});
	};

	const deleteToast = (id: number) => {
		const newList = clipboardData.copiedDataList.filter(
			(toast: ICopiedDataList) => toast.id !== id
		);
		console.log("newList", newList);
		setClipboardData({
			copiedDataList: newList,
		});
	};

	const notifyMe = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const isSuccess = Math.floor(Math.random() * 10) < 6;
		const target = event.target as HTMLElement;
		const dataToCopy = (target.previousElementSibling as HTMLElement).innerHTML;
		saveClipboardData(dataToCopy, isSuccess);

		console.log("dataToCopy", dataToCopy);
		console.log("ClipboardContext z notify", ClipboardContext);
		if (isSuccess) {
			// saveClipboardData(dataToCopy, isSuccess);
			navigator.clipboard.writeText(dataToCopy);
		} else {
			// clg.error
			// saveClipboardData(dataToCopy, isSuccess);
		}
	};

	return (
		<ClipboardContext.Provider
			value={{
				clipboardData,
				saveClipboardData,
				deleteToast,
				notifyMe,
			}}
		>
			{children}
		</ClipboardContext.Provider>
	);
};
