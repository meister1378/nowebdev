import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.zHqHSC1F.js","_app/immutable/chunks/index._dzuncDJ.js","_app/immutable/chunks/runtime.B7BIZqV9.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/svelte-head.B9GZ22wA.js","_app/immutable/chunks/template.BdaENsGl.js"];
export const stylesheets = [];
export const fonts = [];
