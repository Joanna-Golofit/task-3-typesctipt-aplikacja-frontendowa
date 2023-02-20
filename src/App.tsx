import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./App.css";
import { locations } from "./constants";
import { ClipboardContext } from "./store/ClipboardContext";
import Toast from "./components/Toast";

const App: React.FC = () => {

	const ctx = useContext(ClipboardContext);
	return (
		<>
			<Navigation />
			<main>
					<Toast
						toastList={ctx.clipboardData.copiedDataList}
						position="bottom-right"
					/>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/aboutUs" element={<AboutUs locations={locations} />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/" element={<Navigate to="/home" />} />
					{/* // add route:* */}
				</Routes>
				<br />
				<div style={{ backgroundColor: "gray" }}>
					<br />
					o Po pomyślnym skopiowaniu powinien wyskoczyć w prawym dolnym rogu
					toastmessage z komunikatem: “Copy to clipboard successed” - obok
					tekstu powinna pojawić się zielona kropka świadcząca o pomyślnym
					statusie Success
					<br /> o Status Error - czerwoną kropkę z treścią “Copy to clipboard
					failed”
					<br /> o Toasty powinny znikać po 3sekundach oraz mają mieć możliwość
					ich zamknięcia
				</div>
			</main>

			<Footer />
		</>
	);
};

export default App;
