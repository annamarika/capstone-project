import { useState } from 'react';
import ProductModeShow from './ProductModeShow';
import ProductModeEdit from './ProductModeEdit';

export default function Product(props) {
	const [isEditMode, setIsEditMode] = useState(false);

	const enableEditMode = () => {
		setIsEditMode(true);
	};
	const disableEditMode = () => {
		setIsEditMode(false);
	};

	return (
		<div>
			{isEditMode ? (
				<ProductModeEdit {...props} onDisableEditMode={disableEditMode} />
			) : (
				<ProductModeShow {...props} onEnableEditMode={enableEditMode} />
			)}
		</div>
	);
}
