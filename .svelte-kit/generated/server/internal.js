
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t" + head + "\n\t<style>\n\t\t@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n\t\t* {\n\t\t\tpadding: 0;\n\t\t\toutline: 0;\n\t\t\tmargin: 0;\n\t\t\t/* user-select: none; */\n\t\t\tbox-sizing: border-box;\n\t\t\tfont-family: \"Plus Jakarta Sans\", sans-serif;\n\t\t}\n\n\t\thtml,\n\t\tbody {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tbackground-color: rgb(var(--color1-rgb));\n\t\t}\n\n\t\t#svelte-app {\n\t\t\toverflow: auto overlay;\n\t\t}\n\n\t\t::-webkit-scrollbar {\n\t\t\twidth: 11px;\n\t\t}\n\n\t\t::-webkit-scrollbar-track {\n\t\t\tbox-shadow: inset 0 0 11px 11px rgba(0, 0, 0, 0.05);\n\t\t\tborder: solid 2px transparent;\n\t\t\tborder-radius: 11px;\n\t\t}\n\n\t\t::-webkit-scrollbar-thumb {\n\t\t\tbox-shadow: inset 0 0 11px 11px rgba(0, 0, 0, 0.1);\n\t\t\tborder: solid 2px transparent;\n\t\t\tborder-radius: 11px;\n\t\t}\n\n\t\t::-webkit-scrollbar-thumb:hover {\n\t\t\tbox-shadow: inset 0 0 11px 11px rgba(0, 0, 0, 0.2);\n\t\t}\n\n\t\t::-webkit-scrollbar-button {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t::selection {\n\t\t\tcolor: white;\n\t\t\tbackground: #c700fd;\n\t\t\ttext-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);\n\t\t}\n\n\t\t#background {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: -1;\n\t\t\tbackground: linear-gradient(45deg,\n\t\t\t\t\t#4900fa 10%,\n\t\t\t\t\t#d200fc 100%);\n\t\t\tfilter: brightness(0.75);\n\t\t}\n\n\t\t#background-canvas {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\toverflow: hidden;\n\t\t\ttransform: scale(1.5);\n\t\t\tfilter: blur(32px);\n\t\t\tz-index: -2;\n\t\t}\n\n\t\t#svelte-app {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: 2;\n\t\t}\n\t</style>\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div id=\"background\">\n\t\t<canvas id=\"background-canvas\"></canvas>\n\t</div>\n\t<script src=\"./lib/js/lavalamp.js\"></script>\n\t<div id=\"svelte-app\" style=\"display: contents\">" + body + "</div>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1b9p7m9"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
