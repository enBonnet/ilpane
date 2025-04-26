export const Recipe = () => {
	return (
		<div className="mb-2">
			<h2 className="font-bold mb-2">🧮 Receta</h2>
			<table className="text-left table-fixed w-full">
				<thead>
					<tr>
						<th>Ingrediente</th>
						<th>Cantidad</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Harina total</td>
						<td>500gr</td>
					</tr>
					<tr>
						<td>Hidratacion sugerida</td>
						<td>64% - 77%</td>
					</tr>
					<tr>
						<td>Agua recomendada</td>
						<td>320gr - 385gr</td>
					</tr>
					<tr>
						<td>Sal (2%)</td>
						<td>10g</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
