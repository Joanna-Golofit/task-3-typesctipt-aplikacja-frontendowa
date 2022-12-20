import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Button -> onClick, classNames, title
// useClipboardAndNotification.tsx

{/* <>
<About>
<home>
{
	isActive && <Toast>
}
</> */}

// jak ustawić style z tego poziomu zeby button pojawiał sie dobiero przy hoverze na element nadrzedny?

const useClipboardAndNotification = () => {
  const styles = {
		copyButton: {
      color: "darkblue",
      marginLeft: "5px",
      fontSize: "9px",
      height: "15px",
      cursor: "pointer"
		},
	};
	const notify = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const target = event.target as HTMLLIElement;
		const dataToCopy = (target.previousElementSibling as HTMLLIElement)
			.innerHTML;
		console.log(
			"target",
			(target.previousElementSibling as HTMLLIElement).innerHTML
		);
		toast.success("Copy to clipboard succeeded", {
			theme: "dark",
    });
    
    // i nie wiem jak zrobić zeby  dac info o errorze..kiedy jest error ? po czym to poznac? ;p
		// toast.error("Copy to clipboard failed");

		console.log("clg", dataToCopy);
		navigator.clipboard.writeText(dataToCopy);
	};
	return {
    copyButton: (
      <>
        <button
          style={styles.copyButton}
          title="Click to copy to the clipboard"
          onClick={notify}
          >
          copy
        </button>
        <br/>
      </>
		),
		ToastContainer: (
			<ToastContainer autoClose={3000} closeOnClick position="bottom-right" />
		),
	};
};

export default useClipboardAndNotification;
