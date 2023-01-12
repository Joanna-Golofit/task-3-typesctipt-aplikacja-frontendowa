import React from "react";
import classes from "./CopyButton.module.css";

interface CopyButtonProps {
	text?: string | undefined;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const CopyButton = ({ onClick, text = "Copy" }: CopyButtonProps) => {
	return (
		<>
			<button
				className={classes.copyButton}
				title="Click to copy to the clipboard"
				onClick={onClick}
			>
				{text}
			</button>
			<br />
		</>
	);
};

export default CopyButton;
