export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","Niro_Åhman_CV_en.pdf","explosion.png","favicon-32x32.png","favicon.ico","mexcellent3d.otf","mexcellentrg.otf","niro.jpeg","projectile.png","ship.png"]),
	_: {
		mime: {".pdf":"application/pdf",".png":"image/png",".ico":"image/vnd.microsoft.icon",".otf":"font/otf",".jpeg":"image/jpeg"},
		entry: {"file":"start-2b6f6f85.js","js":["start-2b6f6f85.js","chunks/vendor-56c40f56.js"],"css":["assets/vendor-292344e0.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
