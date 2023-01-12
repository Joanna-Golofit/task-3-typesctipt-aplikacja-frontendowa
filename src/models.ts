export interface Locations {
		country: string;
		street: string;
		zip: string;
		city: string;
}

export interface IClipboardData {
	copiedDataList: any;
}

export interface ClipboardProviderProps {
	children: React.ReactNode;
};

export interface ClipboardContextType {
	clipboardData: IClipboardData;
	saveClipboardData: (text: string, isSuccess: boolean) => void;
	deleteToast: (id: number) => void;
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