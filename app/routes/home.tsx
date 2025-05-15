import { Fermentation } from "~/components/fermentation";
import { Title } from "~/components/title";
import { Ingredients } from "~/components/ingredients";
import { AddIngredients } from "~/components/add-ingredients";
import { Recipe } from "~/components/recipe";
import { CopyRecipe } from "~/components/copy-recipe";
import { Outlet } from "react-router";

export function meta() {
	return [{ title: "Pair Pan" }, { name: "description", content: "Pair Pan" }];
}

export default function Home() {
	return (
		<div className="relative z-10 flex w-full text-[#3e2e1b] mb-8 overflow-auto">
			<div className="flex flex-col items-center w-full">
				<div className="px-4 max-w-lg">
					<Title />
					<div className="flex gap-4 flex-col w-full">
						<Fermentation />
						<Ingredients />
						<AddIngredients />
						<Recipe />
						<CopyRecipe />
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
