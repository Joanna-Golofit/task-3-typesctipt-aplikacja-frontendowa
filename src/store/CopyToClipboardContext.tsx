import React from 'react';
// import { CopyToClipboardContext, CopyToClipboardContextType } from '../models';

// const CopyToClipboardContext = React.createContext(isRequestSuccess);
const CopyToClipboardContext = React.createContext({ isRequestSuccess: true });

//  Property 'value' is missing in type '{ children: Element; }' but required in type 'ProviderProps<{ isRequestSuccess: boolean; }>'.

// const CopyToClipboardContext = ({ boolean = true }) => {
// 	return <div>CopyToClipboardContext</div>;
// };

export default CopyToClipboardContext