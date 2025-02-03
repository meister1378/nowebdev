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
		client: {"start":"_app/immutable/entry/start.C1PPKsNs.js","app":"_app/immutable/entry/app.DZYzI9fd.js","imports":["_app/immutable/entry/start.C1PPKsNs.js","_app/immutable/chunks/entry.Dd4lkkmP.js","_app/immutable/chunks/runtime.B7BIZqV9.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index-client.DA4nyfkW.js","_app/immutable/entry/app.DZYzI9fd.js","_app/immutable/chunks/runtime.B7BIZqV9.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.DZi9s5lS.js","_app/immutable/chunks/events.Bxfgpegf.js","_app/immutable/chunks/svelte-head.B9GZ22wA.js","_app/immutable/chunks/template.BdaENsGl.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.HVlXuLIU.js","_app/immutable/chunks/proxy.DroUi3js.js","_app/immutable/chunks/store.Dl8SqMtT.js","_app/immutable/chunks/index-client.DA4nyfkW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/business/analysis",
				pattern: /^\/business\/analysis\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/business/consult",
				pattern: /^\/business\/consult\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/business/develop",
				pattern: /^\/business\/develop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/company/about-us",
				pattern: /^\/company\/about-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/company/ceo-message",
				pattern: /^\/company\/ceo-message\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/company/certifications",
				pattern: /^\/company\/certifications\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/company/vision",
				pattern: /^\/company\/vision\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/program/I",
				pattern: /^\/program\/I\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/program/N",
				pattern: /^\/program\/N\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/program/Y",
				pattern: /^\/program\/Y\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/program/quality_analysis",
				pattern: /^\/program\/quality_analysis\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/service/download",
				pattern: /^\/service\/download\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/service/faq",
				pattern: /^\/service\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/service/notice",
				pattern: /^\/service\/notice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/sverdle/how-to-play",
				pattern: /^\/sverdle\/how-to-play\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
