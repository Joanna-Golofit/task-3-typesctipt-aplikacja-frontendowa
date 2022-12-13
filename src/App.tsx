import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./App.css";
import { locations } from './constants';

const App: React.FC = () => {
	return (
		<div>
			<Navigation />
			<main>
				<Routes>
					<Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs locations={locations} />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/" element={<Navigate to="/home" />} />
					{/* // add route:* */}
				</Routes>

				<br />
				<br />
				<div style={{ backgroundColor: "gray" }}>
					<h3>
						Pamiętaj, że piszesz w Typescript – typuj tam gdzie jest potrzeba.
					</h3>
					<br />
					<br />
					#Mechanizm kopiowania danych do schowka:
					<br />
					• Stwórz mechanizm do kopiowania wybranych danych do schowka (copy to
					clipboard) razem z wyskakującymi powiadomieniami dla usera po
					pomyślnym skopiowaniu danych (toast messages)
					<br />
					• Mechanizm kopiowania:
					<br />
					o Do toastów możesz użyć libki react-toastify
					<br />
					o Stwórz metodę, która będzie kopiowała wybrane treści do schowka
					<br />
					o Po pomyślnym skopiowaniu powinien wyskoczyć w prawym dolnym rogu
					toastmessage z komunikatem: “Copy to clipboard successed” - obok
					tekstu powinna pojawić się zielona kropka świadcząca o pomyślnym
					statusie Success
					<br />
					o Status Error analogicznie wyświetli czerwoną kropkę z treścią “Copy
					to clipboard failed”
					<br />o Toasty powinny znikać po 3sekundach oraz mają mieć możliwość
					ich zamknięcia
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;
