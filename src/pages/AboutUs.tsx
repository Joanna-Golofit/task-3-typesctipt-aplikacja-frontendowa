import React from 'react'
import { Locations } from '../models';

interface Props {
	locations: Locations[];
}

const AboutUs: React.FC<Props> = ({locations}: Props) => {
  return (
		<div>
			<h1>AboutUs</h1>
			<b>
				Każda lokalizacja powinna posiadać możliwość skopiowania jej do schowka przy
				pomocy buttona/icony kopiowania
			</b>
			<ul>
				{locations.map(location => (
					<li key={location.zip}>
						{location.country} {location.street} {location.zip} {location.city}
					</li>
				))}
			</ul>
		</div>
	);
}

export default AboutUs