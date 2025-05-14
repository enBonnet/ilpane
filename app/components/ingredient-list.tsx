import { ingredients } from "~/data/ingredients.json";

export type IngredientItemType = {
	[id: (typeof ingredients)[number]["id"]]: string;
};

export const IngredientItem = ({
	id,
	quantity,
	name,
}: { id: string; quantity: number; name: string }) => {
	return (
		<>
			<label htmlFor={id} className="text-[#3e2e1b]">
				{name}
			</label>
			<div className="flex gap-2 max-w-30">
				<span className="self-center font-bold text-[#3e2e1b]">
					{quantity} gr
				</span>
			</div>
		</>
	);
};

export const IngredientList = ({
	ingredientsSelected,
}: { ingredientsSelected: IngredientItemType }) => {
	return Object.entries(ingredientsSelected).map(([id, quantity]) => {
		const ingredientData = ingredients.find((i) => i.id === id);

		if (!ingredientData || quantity === "0") {
			return null;
		}

		return (
			<div className="flex gap-4 justify-between items-center" key={id}>
				<IngredientItem
					id={id}
					quantity={Number(quantity)}
					name={ingredientData.name}
				/>
			</div>
		);
	});
};
