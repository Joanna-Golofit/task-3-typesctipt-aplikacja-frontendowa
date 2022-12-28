import React from 'react';
import classes from './CopyButton.module.css';
// import { notify } from "../helpers/helpers"; // nie moge tego tu przeniesc jako domyslne value bo typy sie nie zgadzaja..


interface CopyButtonProps {
	text?: string | undefined;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	// onClick?: () => void;
	// jakasFunkcja: () => void;
	// jakasFunkcja: (e: React.FormEvent) => void;
};

// const CopyButton = ({ onClick = { notify }, text = "Copy" }: CopyButtonProps) => {
const CopyButton = ({ onClick, text = "Copy" }: CopyButtonProps) => {
	return (
		<>
		<button className={classes.copyButton} onClick={onClick}>
			{text}
		</button>
		<br />
		</>
	);
};

export default CopyButton;