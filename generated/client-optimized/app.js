export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/business/analysis": [4],
		"/business/consult": [5],
		"/business/develop": [6],
		"/company/about-us": [7],
		"/company/ceo-message": [8],
		"/company/certifications": [9],
		"/company/vision": [10],
		"/contact": [11],
		"/program/I": [12],
		"/program/N": [13],
		"/program/Y": [15],
		"/program/quality_analysis": [14],
		"/service/download": [16],
		"/service/faq": [17],
		"/service/notice": [18],
		"/sverdle": [~19],
		"/sverdle/how-to-play": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';