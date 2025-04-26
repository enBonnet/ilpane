import { Link } from "react-router";

export const CopyRecipe = () => {
	return (
		<div className="flex justify-end">
			<Link
				to="/copied"
				className="px-6 py-3 rounded-xl bg-[#d09e60] text-[#3e2e1b] font-semibold shadow-md hover:bg-[#b87f3c] transition-colors duration-200"
			>
				📋 Copiar receta
			</Link>
		</div>
	);
};
