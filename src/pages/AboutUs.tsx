import React, { useContext } from "react";
import { ILocations } from "../models";
import CopyButton from "../components/CopyButton";
import { ClipboardContext } from "../store/ClipboardContext";
interface Props {
	locations: ILocations[];
}

const AboutUs: React.FC<Props> = ({ locations }: Props) => {
	const ctx = useContext(ClipboardContext);

	return (
		<div>
			<h1>AboutUs</h1>
			<ul>
				{locations.map(location => (
					<li key={location.zip}>
						<span className="DataToCopy">
							{`${location.country} ${location.street} ${location.zip} ${location.city}`}
						</span>
							<CopyButton onClick={ctx.notifyMe} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default AboutUs;
