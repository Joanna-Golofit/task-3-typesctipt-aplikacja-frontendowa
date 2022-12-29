import React, { useState } from 'react';
import { IClipboardData } from '../models';

export const ClipboardContext = React.createContext({});

export const ClipboardProvider: React.FC<React.ReactNode> = props => {
	const [clipboardData, setClipboardData] = useState<IClipboardData>({
		copiedData: "",
		isRequestSuccess: Math.floor(Math.random() * 10) < 8,
	});
	return (
    <ClipboardContext.Provider value={"hello"}>
      {props.children}
    </ClipboardContext.Provider>
	);
};