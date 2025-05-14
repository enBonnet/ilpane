import { Link, useLocation } from "react-router";

export const AddIngredients = () => {
	const location = useLocation();

	return (
		<div className="w-full">
			<Link
				to={`/ingredients${location.search}`}
				className="block text-center px-6 py-3 rounded-xl bg-[#d09e60] text-[#3e2e1b] font-semibold shadow-md hover:bg-[#b87f3c] transition-colors duration-200"
			>
				Add ingredient
			</Link>
		</div>
	);
};
