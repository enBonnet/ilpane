import { Fermentation } from "~/components/fermentation";
import { Title } from "~/components/title";
import { Ingredients } from "~/components/ingredients";
import { AddIngredients } from "~/components/add-ingredients";
import { Recipe } from "~/components/recipe";
import { CopyRecipe } from "~/components/copy-recipe";
import { Outlet } from "react-router";
import { Logo } from "~/components/logo";

export function meta() {
	return [
		{ title: "il Pane - Share Your Bread Recipes" },
		{
			name: "description",
			content:
				"Easily share your bread recipes with friends in just one click. Discover, create, and share amazing bread recipes with the il Pane community.",
		},
		{
			name: "keywords",
			content:
				"bread recipes, baking, recipe sharing, bread making, baking community",
		},
		{ name: "robots", content: "index, follow" },
		{ property: "og:title", content: "il Pane - Share Your Bread Recipes" },
		{
			property: "og:description",
			content:
				"Easily share your bread recipes with friends in just one click. Discover, create, and share amazing bread recipes with the il Pane community.",
		},
		{ property: "og:type", content: "website" },
		{
			property: "og:image",
			content: "/images/og-image.jpg",
		},
		{ property: "og:url", content: "https://ilpane.lat" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: "il Pane - Share Your Bread Recipes" },
		{
			name: "twitter:description",
			content:
				"Easily share your bread recipes with friends in just one click. Discover, create, and share amazing bread recipes with the il Pane community.",
		},
		{
			name: "twitter:image",
			content: "/images/og-image.jpg",
		},
	];
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
					href="https://enbonnet.com/?ref=ilpane"
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
				|<a href="https://github.com/enBonnet/ilpane">GitHub</a>
			</div>
		</>
	);
}
