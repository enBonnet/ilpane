import { useNavigate, useLocation } from "react-router";
import { Modal } from "~/components/modal";
import { ingredients } from "~/data/ingredients.json";
import qs from "qs";
import { IngredientInputList } from "~/components/ingredient-input-list";

const IngredientsModal = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const selectedIngredients: Record<string, string> = {};

		for (const ingredient of ingredients) {
			if (
				formData.get(ingredient.id) !== "" &&
				formData.get(ingredient.id) !== "0"
			) {
				selectedIngredients[ingredient.id] = formData.get(
					ingredient.id,
				) as string;
			}
		}

		const getExistingIngredients = () => {
			const urlIngredients = qs.parse(location.search, {
				ignoreQueryPrefix: true,
			});
			const cleanedUpIngredients: Record<string, string> = {};
			Object.entries(urlIngredients).map(([id, quantity]) => {
				if (quantity && quantity !== "0" && Number(quantity.length) > 0) {
					cleanedUpIngredients[id] = quantity as string;
				}
			});
			return cleanedUpIngredients;
		};

		const query = qs.stringify({
			...getExistingIngredients(),
			...selectedIngredients,
		});
		navigate(`/?${query}`);
	};

	return (
		<Modal>
			<form
				onSubmit={handleSubmit}
				className="max-w-full w-lg flex flex-col gap-4 text-[#3e2e1b]"
			>
				<h2 className="text-lg font-bold mb-4">Ingredients</h2>
				<IngredientInputList ingredients={ingredients} />
				<div className="w-full">
					<button
						type="submit"
						className="px-6 w-full py-3 rounded-xl bg-[#d09e60] text-[#3e2e1b] font-semibold shadow-md hover:bg-[#b87f3c] transition-colors duration-200"
					>
						Save
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default IngredientsModal;
