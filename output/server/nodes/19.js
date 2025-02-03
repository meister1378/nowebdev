import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 19;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/19.BkRNxWVr.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/index.BFqC5wTN.js"];
export const stylesheets = [];
export const fonts = [];
