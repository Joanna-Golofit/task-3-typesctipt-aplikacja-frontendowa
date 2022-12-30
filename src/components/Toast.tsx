import React from 'react'
import { ToastProps, IToastProperties } from "../models";

const Toast: React.FC<ToastProps> = ({ toastList }) => {
	console.log("toastList", toastList);
	return (
		<>
			<h1>Toast</h1>
			{/* {toastList.map((toast: IToastProperties) => (
					<p key={toast.id}>{toast.description}</p>
          // https://reactjs.org/docs/error-boundaries.html Introducing Error Boundaries
				))} */}
		</>
	);
};

export default Toast