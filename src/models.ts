export interface Locations {
		country: string;
		street: string;
		zip: string;
		city: string;
}

export interface IClipboardData {
	copiedData: string;
	isRequestSuccess: boolean;
}

// export interface CopyToClipboardContext {
// 	isRequestSuccess: boolean;
// }

// export type CopyToClipboardContextType = {
// 	isRequestSuccess: CopyToClipboardContext;
// };