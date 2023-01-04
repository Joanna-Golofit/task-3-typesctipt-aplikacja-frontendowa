import React from "react";
import { ToastProps, IToastProperties } from "../models";

const Toast: React.FC<ToastProps> = ({ toastList, text }) => {
	console.log("toastList", toastList);
	return (
		<>
			<div style={{ backgroundColor: text === "" ? "blue" : "red" }}>
				<h1>Toast</h1>
				{toastList.length >= 1 &&
					toastList.map((toast: IToastProperties) => (
						<div>
							<button>X</button>
							<div>
								<p key={toast.id}>{text}</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default Toast;
// https://reactjs.org/docs/error-boundaries.html Introducing Error Boundaries
