import React, { useState } from 'react';
import {
	IClipboardData,
	ClipboardProviderProps,
	ClipboardContextType,
	ICopiedDataList,
} from "../models";

const initialClipboardData: IClipboardData = {
	copiedData: "",
	copiedDataList: [],
};

export const ClipboardContext = React.createContext<ClipboardContextType | null>(null);

export const ClipboardProvider = ({ children }: ClipboardProviderProps) => {
	const [clipboardData, setClipboardData] =
		useState(initialClipboardData);

	const saveClipboardData = (text: string) => {
		setClipboardData({
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

	const deleteToast = (id: number) => {
		const newList = clipboardData.copiedDataList.filter(
			(toast: ICopiedDataList) => toast.id !== id
		);
		console.log("newList", newList);
		setClipboardData({
			copiedData: clipboardData.copiedData,
			copiedDataList: newList,
		});
	};

	return (
		<ClipboardContext.Provider
			value={{
				clipboardData,
				saveClipboardData,
				deleteToast,
			}}
		>
			{children}
		</ClipboardContext.Provider>
	);
};
