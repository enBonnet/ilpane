import { Fermentation } from "~/components/fermentation";
import { Title } from "~/components/title";
import { Ingredients } from "~/components/ingredients";
import { AddIngredients } from "~/components/add-ingredients";
import { Recipe } from "~/components/recipe";
import { CopyRecipe } from "~/components/copy-recipe";
import { Outlet } from "react-router";
import { Logo } from "~/components/logo";

export function meta() {
	return [{ title: "Pair Pan" }, { name: "description", content: "Pair Pan" }];
}

export default function Home() {
	return (
		<>
			<div className="relative z-10 flex w-full text-[#3e2e1b] mb-8 overflow-auto">
				<Outlet />
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
			</div>
			<div className="flex justify-center items-center gap-2 text-[#3e2e1b] mb-8">
				<a
					href="https://enbonnet.com/?ref=pairpan"
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg inline-flex items-center gap-2"
				>
					Made with 💜 by{" "}
					<div className="w-8">
						<Logo />
					</div>
					<div className="hidden">By @enBonnet</div>
				</a>
				|<a href="https://github.com/enBonnet/justbreadit">GitHub</a>
			</div>
		</>
	);
}
