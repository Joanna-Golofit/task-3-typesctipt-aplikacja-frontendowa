import React, { useState } from 'react';
import {
	IClipboardData,
	ClipboardProviderProps,
	ClipboardContextType,
	ICopiedDataList,
} from "../models";

const initialClipboardData: IClipboardData = {
	copiedDataList: [],
};

export const ClipboardContext = React.createContext<ClipboardContextType | null>(null);

export const ClipboardProvider = ({ children }: ClipboardProviderProps) => {
	const [clipboardData, setClipboardData] =
		useState(initialClipboardData);

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
	}

	const deleteToast = (id: number) => {
		const newList = clipboardData.copiedDataList.filter(
			(toast: ICopiedDataList) => toast.id !== id
		);
		console.log("newList", newList);
		setClipboardData({
			copiedDataList: newList,
		});
	};

	return (
		<ClipboardContext.Provider
			value={{
				clipboardData,
				saveClipboardData,
				deleteToast,
				// copyToClipboard // notify
			}}
		>
			{children}
		</ClipboardContext.Provider>
	);
};
