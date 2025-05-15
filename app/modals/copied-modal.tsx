import { Modal } from "~/components/modal";

const CopiedModal = () => {
	return (
		<Modal>
			<div className="text-[#3e2e1b]">
				<h2 className="text-lg font-bold mb-4">Recipe copied</h2>
				<p>Recipe copied to clipboard</p>
			</div>
		</Modal>
	);
};

export default CopiedModal;
