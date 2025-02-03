export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.jpg","ceo.jpg","cert1.png","cert2.png","cert3.png","cert4.png","customer1.png","customer2.png","customer3.png","customer4.png","customer5.png","customer6.png","favicon.png","logo.png","organization-chart.png","program/logistics.jpg","program/smart-factory.jpg","robots.txt","임시.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cq0WdviL.js","app":"_app/immutable/entry/app.DG00Wepu.js","imports":["_app/immutable/entry/start.Cq0WdviL.js","_app/immutable/chunks/entry.D67-IpTI.js","_app/immutable/chunks/runtime.B7BIZqV9.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index-client.DA4nyfkW.js","_app/immutable/entry/app.DG00Wepu.js","_app/immutable/chunks/runtime.B7BIZqV9.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.DZi9s5lS.js","_app/immutable/chunks/events.Bxfgpegf.js","_app/immutable/chunks/svelte-head.B9GZ22wA.js","_app/immutable/chunks/template.BdaENsGl.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.HVlXuLIU.js","_app/immutable/chunks/proxy.DroUi3js.js","_app/immutable/chunks/store.Dl8SqMtT.js","_app/immutable/chunks/index-client.DA4nyfkW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
