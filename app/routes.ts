import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	route("/", "./routes/home.tsx", [
		route("ingredients", "./modals/ingredients-modal.tsx"),
		route("copied", "./modals/copied-modal.tsx"),
	]),
] satisfies RouteConfig;
