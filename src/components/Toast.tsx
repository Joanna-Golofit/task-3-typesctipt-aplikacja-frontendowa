import React from 'react'
import { ToastProps, IToastProperties } from "../models";

const Toast: React.FC<ToastProps> = (props) => {
  console.log(props)
  return (
		<>
			<h1>Toast</h1>
			{props.toastList.map((toast: IToastProperties) =>
				<p>toast.description</p>
			)}
		</>
	);
};

export default Toast