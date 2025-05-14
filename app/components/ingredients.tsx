import { useLocation } from "react-router";
import { IngredientList } from "./ingredient-list";
import qs from "qs";

export const Ingredients = () => {
	const location = useLocation();
	const ingredients = qs.parse(location.search, {
		ignoreQueryPrefix: true,
	}) as Record<string, string>;

	return (
		<div>
			<h2 className="font-bold mb-2">Ingredients</h2>
			<div className="flex flex-col gap-4">
				<IngredientList ingredientsSelected={ingredients} />
			</div>
		</div>
	);
};
