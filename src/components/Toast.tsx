import React from "react";
import styles from "./Toast.module.css";
import { ToastProps, ICopiedDataList } from "../models";

const Toast: React.FC<ToastProps> = ({ toastList, text, position }) => {
	console.log("toastList", toastList);
	return (
		<>
			{/* <div style={{ backgroundColor: text === "" ? "blue" : "red" }}> */}
			<div className={`${styles.container} ${styles[position]}`}>
				{toastList.length > 0 &&
					toastList.map((toast: ICopiedDataList) => (
						<div
							key={toast.id}
							className={`${styles.notification} ${styles.toast}`}
						>
							<button>X</button>
              <div>
                <div className={toast.isRequestSuccess ? styles.success : styles.error}></div>
								<span className={styles.text}>{text}</span>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default Toast;
// https://reactjs.org/docs/error-boundaries.html Introducing Error Boundaries
