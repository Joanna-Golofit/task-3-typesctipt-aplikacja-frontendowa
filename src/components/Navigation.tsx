import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'


const Navigation: React.FC = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.ul}>
					{/* <li>
						<NavLink
							className={navData => (navData.isActive ? classes.active : "")}
							to="/home"
						>
							Home
						</NavLink>
					</li> */}
					<li>
						<NavLink
							className={navData => (navData.isActive ? classes.active : "")}
							to="/aboutUs"
						>
							About us
						</NavLink>
					</li>
					{/* <li>
						<NavLink
							className={navData => (navData.isActive ? classes.active : "")}
							to="/contact"
						>
							Contact
						</NavLink>
					</li> */}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation