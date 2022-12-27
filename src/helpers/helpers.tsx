import { toast } from "react-toastify";

export const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
	// jak mozna inaczej to obejsc?

	const target = event.target as HTMLLIElement;
	const dataToCopy = (target.previousElementSibling as HTMLLIElement).innerHTML;
	console.log(
		"target",
		(target.previousElementSibling as HTMLLIElement).innerHTML
	);
	toast.success("Copy to clipboard succeeded", {
		theme: "dark",
	});
	console.log("clg", dataToCopy);
	navigator.clipboard.writeText(dataToCopy);
};
