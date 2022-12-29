import React, { useState } from 'react';
import { IClipboardData, ClipboardProviderProps } from "../models";

export const ClipboardContext = React.createContext({});

export const ClipboardProvider = ({ children }: ClipboardProviderProps) => {

	const [clipboardData, setClipboardData] = useState<IClipboardData>({
		copiedData: "",
		isRequestSuccess: Math.floor(Math.random() * 10) < 8,
	});

	return (
		<ClipboardContext.Provider value="hello">
			{children}
		</ClipboardContext.Provider>
	);
};