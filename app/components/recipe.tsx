import { useLocation } from "react-router";
import { fermentation } from "~/data/fermentation.json";
import { ingredients } from "~/data/ingredients.json";
import qs from "qs";

export const Recipe = () => {
	const location = useLocation();
	const urlIngredients = qs.parse(location.search, {
		ignoreQueryPrefix: true,
	}) as Record<string, string>;

	const getFermentName = (fermentId: string) => {
		return fermentation.find((i) => i.id === fermentId)?.name;
	};

	const selectedIngredients = Object.entries(urlIngredients).map(
		([id, quantity]) => {
			const ingredientData = ingredients.find((i) => i.id === id);
			const fermentationData = fermentation.find((i) => i.id === quantity);

			return Object.assign(
				{
					id,
					quantity,
				},
				fermentationData
					? {
							...fermentationData,
							type: "fermentation",
							absorption: 0,
						}
					: {
							...fermentation[0],
							type: "fermentation",
							absorption: 0,
						},
				ingredientData ? { ...ingredientData } : {},
			);
		},
	);

	function calculateBreadRecipe(ingredients: typeof selectedIngredients) {
		let totalFlour = 0;
		let water = 0;
		let salt = Number(ingredients.find((i) => i.id === "sl")?.quantity) || 0;
		let ferment = 0;
		let fermentTime = 0;
		const hydrationPercent =
			Number(ingredients.find((i) => i.id === "wt")?.quantity) || 0;

		const fermentationType =
			ingredients.find((i) => i.type === "fermentation")?.id || "dry";

		const fermentationMap = {
			sourdough: { percent: 0.2, time: 24 },
			yeast: { percent: 0.025, time: 2 },
			dry: { percent: 0.02, time: 1 },
		};

		for (const ingredient of ingredients) {
			const qty = Number.parseFloat(ingredient.quantity);
			if (Number.isNaN(qty) || qty <= 0) continue;

			if (ingredient.type === "flour") {
				totalFlour += qty;
			}
		}

		// Calculate water based on target hydration or ingredients
		if (hydrationPercent > 0) {
			water = totalFlour * (hydrationPercent / 100);
		} else {
			let totalAbsorption = 0;

			for (const ingredient of ingredients) {
				const qty = Number.parseFloat(ingredient.quantity);
				if (Number.isNaN(qty) || qty <= 0) continue;

				if (ingredient.type === "flour") {
					totalAbsorption += qty * (ingredient.absorption / 100);
				} else if (
					ingredient.type === "add-in" ||
					ingredient.type === "sweetener"
				) {
					water += qty * (ingredient.absorption / 100);
				} else if (ingredient.type === "liquid") {
					water += qty;
				}
			}

			// Add absorbed water from flour
			water += totalAbsorption;
		}

		// Salt: 2% of total flour
		salt = totalFlour * 0.02 + salt;

		// Fermentation
		const { percent, time } =
			fermentationMap[fermentationType as keyof typeof fermentationMap] ||
			fermentationMap.dry;

		ferment = totalFlour * percent;
		fermentTime = time;

		const hydration = (water / totalFlour) * 100;

		return {
			flour: totalFlour,
			water: Math.round(water),
			salt: Math.round(Math.round(salt * 10) / 10),
			ferment: Math.round(Math.round(ferment * 10) / 10),
			hydration: Math.round(Math.round(hydration * 10) / 10),
			fermentationType,
			fermentationTime: fermentTime,
		};
	}

	const recipe = calculateBreadRecipe(selectedIngredients);

	return (
		<div className="mb-2">
			<h2 className="font-bold mb-2">🧮 Recipe</h2>
			<table className="text-left table-fixed w-full">
				<thead>
					<tr>
						<th>Ingredient</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Flour total</td>
						<td>{recipe.flour}gr</td>
					</tr>
					<tr>
						<td>Sal (+2%)</td>
						<td>{recipe.salt}gr</td>
					</tr>
					<tr>
						<td>Water ({recipe.hydration}%)</td>
						<td>{recipe.water}gr</td>
					</tr>
					<tr>
						<td>{getFermentName(recipe.fermentationType)}</td>
						<td>{recipe.ferment}gr</td>
					</tr>
				</tbody>
			</table>
			<div className="mt-4">
				<h2 className="font-bold mb-2">Instructions</h2>
				<div className="flex gap-2">
					<div>Fermentation time: </div>
					<div>{recipe.fermentationTime}h</div>
				</div>
			</div>
		</div>
	);
};
