import type { ingredients } from "~/data/ingredients.json";
import { useLocation, useNavigate } from "react-router";
import qs from "qs";
import { MinusIcon } from "./minus-icon";

export type IngredientType = (typeof ingredients)[number];

export const IngredientInput = ({
	ingredient,
}: { ingredient: IngredientType }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const ingredientData = qs.parse(location.search, {
		ignoreQueryPrefix: true,
	}) as Record<string, string>;

	const removeIngredient = (id: string) => {
		const query = qs.stringify({
			...ingredientData,
			[id]: "0",
		});
		navigate(`/ingredients?${query}`);
	};

	return (
		<>
			<label htmlFor={ingredient.id} className="text-[#3e2e1b]">
				{ingredient.name}
			</label>
			<div className="flex gap-2 max-w-40">
				{Number(ingredientData[ingredient.id]) ? (
					<div>
						<button
							type="button"
							className="px-2 py-3 rounded-xl bg-[#d09e60] text-[#3e2e1b] font-semibold shadow-md hover:bg-[#b87f3c] transition-colors duration-200"
							onClick={() => {
								removeIngredient(ingredient.id);
							}}
						>
							<MinusIcon />
						</button>
					</div>
				) : null}
				<input
					type="number"
					id={ingredient.id}
					name={ingredient.id}
					autoComplete="off"
					value={ingredientData[ingredient.id] || ""}
					onChange={(e) => {
						const query = qs.stringify({
							...ingredientData,
							[ingredient.id]: e.target.value,
						});
						navigate(`/ingredients?${query}`);
					}}
					placeholder="0"
					className="w-full px-4 py-3 max-w-md rounded-xl bg-[#f5e8d3] text-[#3e2e1b] placeholder-[#423423] border border-[#e2c6a1] focus:outline-none focus:ring-2 focus:ring-[#d09e60] focus:border-[#d09e60] transition"
				/>
				<span className="self-center font-bold text-[#3e2e1b]">
					{ingredient.id === "wt" ? "%" : "gr"}
				</span>
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
