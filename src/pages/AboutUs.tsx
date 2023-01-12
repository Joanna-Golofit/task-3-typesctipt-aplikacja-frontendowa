import React from "react";
import { Locations } from "../models";
import CopyButton from "../components/CopyButton";
import useNotify from "../hooks/UseNotify";
interface Props {
	locations: Locations[];
}

const AboutUs: React.FC<Props> = ({ locations }: Props) => {
		const { notify } = useNotify();


	return (
		<div>
			<h1>AboutUs</h1>
			<ul>
				{locations.map(location => (
					<li
						key={location.zip}
					>
						<span className="DataToCopy">
							{`${location.country} ${location.street} ${location.zip} ${location.city}`}
						</span>
						<CopyButton onClick={notify} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default AboutUs;
