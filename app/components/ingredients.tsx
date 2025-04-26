export const Ingredients = () => {
	return (
		<div>
			<h2 className="font-bold mb-2">🍚 ¿Que ingredientes quieres usar?</h2>
			<table className="text-left table-fixed w-full">
				<thead>
					<tr>
						<th>Ingrediente</th>
						<th>Cantidad (gr)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Harina</td>
						<td>
							<input
								type="text"
								id="flour"
								defaultValue="500"
								className="px-4 py-3 w-full max-w-md rounded-xl bg-[#f5e8d3] text-[#3e2e1b] placeholder-[#9e7c55] border border-[#e2c6a1] focus:outline-none focus:ring-2 focus:ring-[#d09e60] focus:border-[#d09e60] transition"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
