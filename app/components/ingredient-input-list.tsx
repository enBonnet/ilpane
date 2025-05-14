import type { ingredients } from "~/data/ingredients.json";
import { useLocation } from "react-router";
import qs from "qs";

export type IngredientType = (typeof ingredients)[number];

export const IngredientInput = ({
	ingredient,
}: { ingredient: IngredientType }) => {
	const location = useLocation();
	const ingredientData = qs.parse(location.search, {
		ignoreQueryPrefix: true,
	}) as Record<string, string>;

	return (
		<>
			<label htmlFor={ingredient.id} className="text-[#3e2e1b]">
				{ingredient.name}
			</label>
			<div className="flex gap-2 max-w-30">
				<input
					type="number"
					id={ingredient.id}
					name={ingredient.id}
					autoComplete="off"
					defaultValue={ingredientData[ingredient.id] || ""}
					placeholder="0"
					className="w-full px-4 py-3 max-w-md rounded-xl bg-[#f5e8d3] text-[#3e2e1b] placeholder-[#423423] border border-[#e2c6a1] focus:outline-none focus:ring-2 focus:ring-[#d09e60] focus:border-[#d09e60] transition"
				/>
				<span className="self-center font-bold text-[#3e2e1b]">gr</span>
			</div>
		</>
	);
};

export const IngredientInputList = ({
	ingredients,
}: { ingredients: IngredientType[] }) => {
	return ingredients.map((ingredient) => {
		return (
			<div
				className="flex gap-4 justify-between items-center"
				key={ingredient.id}
			>
				<IngredientInput ingredient={ingredient} />
			</div>
		);
	});
};
