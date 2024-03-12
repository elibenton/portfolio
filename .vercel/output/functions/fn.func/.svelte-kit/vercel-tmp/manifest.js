export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","ELI.pxd","ELI.svg","ELI.webp","audio.jpg","audio.webp","eli.jpg","favicon.png","hal-fonts/hal-timezone-italic.otf","hal-fonts/hal-timezone-monospace.otf","hal-fonts/hal-timezone-regular.otf","klim-fonts/sohne-buch.otf","newyorker.jpg","newyorker.pxd","newyorker.webp","nyt.jpg","raven.jpg","raven.webp","salton.jpg","train.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png",".otf":"font/otf"},
	_: {
		client: {"start":"_app/immutable/entry/start.DbKZLWcf.js","app":"_app/immutable/entry/app.Cr0P0HiZ.js","imports":["_app/immutable/entry/start.DbKZLWcf.js","_app/immutable/chunks/entry.B69S1xRR.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.Cr0P0HiZ.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DKBitXsh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
