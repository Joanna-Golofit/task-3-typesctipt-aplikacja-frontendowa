import React, { useState, useCallback } from "react";
import styles from "./Toast.module.css";
import { ToastProps, ICopiedDataList } from "../models";

const Toast: React.FC<ToastProps> = ({ toastList, text, position }) => {
  const [newToastList, setNewToastList] = useState<ICopiedDataList[]>([...toastList]);
	console.log("toastList", toastList);
	console.log("newToastList", newToastList);
  console.log("text", text);
  
  const deleteToast = useCallback(
		(id: number) => {
			console.log("id", id);
			const newList = [...newToastList].filter(
				(toast: ICopiedDataList) => toast.id !== id
			);
			setNewToastList([...newList]);
			// setNewToastList((newToastList: ICopiedDataList[]) =>
			// 	[...newToastList.filter((toast: ICopiedDataList) => toast.id !== id)]
			// );
		},
		[toastList]
	);
	return (
		<div className={`${styles.container} ${styles[position]}`}>
			{toastList.length > 0 &&
				toastList.map((toast: ICopiedDataList) => (
					<div
						key={toast.id}
						className={`${styles.notification} ${styles.toast} ${styles[position]}`}
					>
						<button onClick={() => deleteToast(toast.id)}>X</button>
						<div>
							<div
								className={`${styles.dot} ${
									toast.isRequestSuccess ? styles.success : styles.error
								}`}
							></div>
							{/* {toast.isRequestSuccess ? <span className={styles.title}> success</span> : <span className={styles.text}> error</span>} */}
							<span className={styles.title}>
								{toast.isRequestSuccess
									? "Copy to clipboard succeeded"
									: "Copy to clipboard failed!"}
							</span>
							<p className={styles.text}>{toast.text}</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Toast;
// https://reactjs.org/docs/error-boundaries.html Introducing Error Boundaries
