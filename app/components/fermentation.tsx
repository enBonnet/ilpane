export const Fermentation = () => {
	return (
		<div>
			<h2 className="font-bold mb-2">🧫 ¿Como quieres fermentar tu pan?</h2>
			<div>
				<div>
					<input
						type="radio"
						id="sourdough"
						name="fermentation"
						value="sourdough"
						defaultChecked
					/>
					<label htmlFor="sourdough">Masa madre</label>
				</div>

				<div>
					<input type="radio" id="yeast" name="fermentation" value="yeast" />
					<label htmlFor="yeast">Levadura humeda</label>
				</div>

				<div>
					<input type="radio" id="dry" name="fermentation" value="dry" />
					<label htmlFor="dry">Levadura seca</label>
				</div>
			</div>
		</div>
	);
};
