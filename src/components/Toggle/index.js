import React, { useState } from 'react';

import './toggle.css';

function Toggle(props) {
	const [on, setOn] = useState(false);
	console.log(on);
	const handleClick = () => {
		setOn((on) => !on);
	};
	return (
		<div>
			<div className={`toggle ${on ? 'active' : ''}`} onClick={handleClick}>
				<div className={`spinner ${on ? 'active' : ''}`}></div>
			</div>
		</div>
	);
}

export default Toggle;
