import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Bv33XUvD.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/runtime.B7BIZqV9.js","_app/immutable/chunks/events.Bxfgpegf.js","_app/immutable/chunks/template.BdaENsGl.js","_app/immutable/chunks/class.Bvena8yX.js","_app/immutable/chunks/lifecycle.BJPSgObK.js","_app/immutable/chunks/index-client.DA4nyfkW.js"];
export const stylesheets = ["_app/immutable/assets/2.D8Cn1mvV.css"];
export const fonts = [];
