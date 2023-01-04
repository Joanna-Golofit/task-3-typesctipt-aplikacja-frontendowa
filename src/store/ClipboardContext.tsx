import React, { useState } from 'react';
import {
	IClipboardData,
	ClipboardProviderProps,
	ClipboardContextType,
	// ICopiedDataList,
} from "../models";

const initialClipboardData: IClipboardData = {
	copiedData: "",
	copiedDataList: [],
	// isRequestSuccess: Math.floor(Math.random() * 10) < 9,
};

export const ClipboardContext = React.createContext<ClipboardContextType | null>(null);

export const ClipboardProvider = ({ children }: ClipboardProviderProps) => {
	const [clipboardData, setClipboardData] =
		useState(initialClipboardData);

	const saveClipboardData = (text: string) => {
		setClipboardData({
			// isRequestSuccess: Math.floor(Math.random() * 10) < 3,
			copiedData: text,
			copiedDataList: [
				{
					id: Math.floor(Math.random() * 100000),
					text: text,
					isRequestSuccess: Math.floor(Math.random() * 10) < 8,
				},
				...clipboardData.copiedDataList,
			],
		});
	}
	// const saveClipboardDataErr = () => {
	// 	setClipboardData({
	// 		...clipboardData,
	// 		isRequestSuccess: Math.floor(Math.random() * 10) < 3,
	// 	});
	// }

	// const [list, setList] = useState<IToastProperties[]>([
	// 	{
	// 	id: 1,
	// 	title: "00",
	// 	description: "300!",
	// 	color: "red,",
	// }]);

	// let toastProperties = null;
	// const showToast = () => {
	// 	toastProperties = {
	// 		id: 1,
	// 		title: "Success",
	// 		description: "ekstra!",
	// 		color: "red,",
	// 	};
	// 	setList([toastProperties]);
	// };

	return (
		// <ClipboardContext.Provider value={[clipboardData, setClipboardData]}>
		<ClipboardContext.Provider
			value={{
				clipboardData,
				saveClipboardData,
				// saveClipboardDataErr,
				// list,
				// showToast,
			}}
		>
			{children}
		</ClipboardContext.Provider>
	);
};



// const initialClipboardData = {
// 	copiedData: "",
// 	isRequestSuccess: Math.floor(Math.random() * 10) < 5,
// };
// const initialSetClipboardData: React.Dispatch<
// 	React.SetStateAction<IClipboardData>
// > = () => {};

// export const ClipboardContext = React.createContext({
// 	initialClipboardData,
// 	initialSetClipboardData,
// });

// export const ClipboardProvider = ({ children }: ClipboardProviderProps) => {
// 	const [clipboardData, setClipboardData] =
// 		useState<IClipboardData>(initialClipboardData);

// 	return (
// 		<ClipboardContext.Provider value={{ clipboardData, setClipboardData }}>
// 			{children}
// 		</ClipboardContext.Provider>
// 	);
// };