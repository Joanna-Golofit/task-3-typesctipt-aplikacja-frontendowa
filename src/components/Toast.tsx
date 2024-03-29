import React, { useContext, useEffect } from "react";
import styles from "./Toast.module.css";
import { IToastProps, ICopiedDataList } from "../models";
import { ClipboardContext } from "../store/ClipboardContext";

const Toast = ({ toastList, position }: IToastProps) => {
	const ctx = useContext(ClipboardContext);

	useEffect(() => {
		const interval = setInterval(() => {
			if (toastList.length) {
				ctx.deleteToast(toastList[toastList.length - 1].id);
			}
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [toastList, ctx]);

	return (
		<div className={`${styles.container} ${styles[position]}`}>
			{toastList.length > 0 &&
				toastList.map((toast: ICopiedDataList) => (
					<div
						key={toast.id}
						className={`${styles.notification} ${styles.toast} ${styles[position]}`}
					>
						<button onClick={() => ctx.deleteToast(toast.id)}>X</button>
						<div>
							<div
								className={`${styles.dot} ${
									toast.isRequestSuccess ? styles.success : styles.error
								}`}
							></div>
							<span className={styles.title}>
								{toast.isRequestSuccess
									? "Copy to clipboard succeeded"
									: "Copy to clipboard failed!"}
							</span>
							{toast.isRequestSuccess && (
								<p className={styles.text}>{toast.text}</p>
							)}
						</div>
					</div>
				))}
		</div>
	);
};

export default Toast;
