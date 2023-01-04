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

export interface ClipboardProviderProps {
	children: React.ReactNode;
};

export type ClipboardContextType = {
	clipboardData: IClipboardData;
	saveClipboardData: (text: string) => void;
	saveClipboardDataErr: () => void;
	list: IToastProperties;
	showToast: () => void;
};

export interface IToastProperties {
	id: number;
	title: string;
	description: string;
	color: string;
}

export interface ToastProps {
	toastList?: IToastProperties[] | any;
	text?: string;
};
// export interface CopyToClipboardContext {
// 	isRequestSuccess: boolean;
// }

// export type CopyToClipboardContextType = {
// 	isRequestSuccess: CopyToClipboardContext;
// };