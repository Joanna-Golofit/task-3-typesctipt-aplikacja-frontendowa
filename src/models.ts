export interface ILocations {
		country: string;
		street: string;
		zip: string;
		city: string;
}

export interface IClipboardData {
	copiedDataList: any;
}

export interface IClipboardProviderProps {
	children: React.ReactNode;
};

export interface IClipboardContextType {
	clipboardData: IClipboardData;
	saveClipboardData: (text: string, isSuccess: boolean) => void;
	deleteToast: (id: number) => void;
	notifyMe: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export interface ICopiedDataList {
	id: number;
	text: string;
	isRequestSuccess: boolean;
}

export interface IToastProps {
	toastList: ICopiedDataList[] | any;
	text?: string;
	position: string;
};