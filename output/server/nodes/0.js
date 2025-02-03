import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CRarrPXG.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/runtime.B7BIZqV9.js","_app/immutable/chunks/render.DZi9s5lS.js","_app/immutable/chunks/events.Bxfgpegf.js","_app/immutable/chunks/svelte-head.B9GZ22wA.js","_app/immutable/chunks/template.BdaENsGl.js","_app/immutable/chunks/if.HVlXuLIU.js","_app/immutable/chunks/class.Bvena8yX.js","_app/immutable/chunks/index.e1i8K6fS.js","_app/immutable/chunks/lifecycle.BJPSgObK.js","_app/immutable/chunks/store.Dl8SqMtT.js","_app/immutable/chunks/entry.Dd4lkkmP.js","_app/immutable/chunks/index-client.DA4nyfkW.js"];
export const stylesheets = ["_app/immutable/assets/0.CW4Mi9M6.css"];
export const fonts = [];
