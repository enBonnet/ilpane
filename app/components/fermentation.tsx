import { useLocation, useNavigate } from "react-router";
import { fermentation } from "~/data/fermentation.json";
import qs from "qs";

export const Fermentation = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const current = qs.parse(location.search, { ignoreQueryPrefix: true });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = qs.stringify({ ...current, f: e.target.value });
		navigate(`/?${query}`);
	};

	return (
		<div>
			<h2 className="font-bold mb-2">
				🧫 How do you want to ferment your bread?
			</h2>
			<div>
				{fermentation.map((fermentation) => {
					return (
						<div key={fermentation.id}>
							<input
								type="radio"
								id={fermentation.id}
								name="fermentation"
								value={fermentation.id}
								onChange={handleChange}
								defaultChecked={current.f === fermentation.id}
								className="mr-2"
							/>
							<label htmlFor={fermentation.id}>{fermentation.name}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};
