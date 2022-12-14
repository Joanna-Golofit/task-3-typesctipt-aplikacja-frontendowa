export interface Locations {
		country: string;
		street: string;
		zip: string;
		city: string;
}

export interface IClipboardData {
	copiedData: string;
	copiedDataList: any;
	// isRequestSuccess: boolean;
}

export interface ClipboardProviderProps {
	children: React.ReactNode;
};

export type ClipboardContextType = {
	clipboardData: IClipboardData;
	saveClipboardData: (text: string) => void;
	deleteToast: (id: number) => void
	// saveClipboardDataErr: () => void;
	// list: IToastProperties;
	// showToast: () => void;
};

// export interface IToastProperties {
// 	id: number;
// 	title: string;
// 	description: string;
// 	color: string;
// }
export interface ICopiedDataList {
	id: number;
	text: string;
	// description: string;
	// color: string;
	isRequestSuccess: boolean;
}

export interface ToastProps {
	toastList: ICopiedDataList[] | any;
	text?: string;
	position: string;
};
// export interface CopyToClipboardContext {
// 	isRequestSuccess: boolean;
// }

// export type CopyToClipboardContextType = {
// 	isRequestSuccess: CopyToClipboardContext;
// };