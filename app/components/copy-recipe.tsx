import { useLocation, useNavigate } from "react-router";

export const CopyRecipe = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleCopy = () => {
		navigator.clipboard.writeText(window.location.href).then(() => {
			navigate(`/copied${location.search}`);
		});
	};

	return (
		<div className="w-full">
			<button
				type="button"
				onClick={handleCopy}
				className="block w-full text-center px-6 py-3 rounded-xl bg-[#d09e60] text-[#3e2e1b] font-semibold shadow-md hover:bg-[#b87f3c] transition-colors duration-200"
			>
				📋 Copy recipe
			</button>
		</div>
	);
};
