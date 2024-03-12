

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ouxyV15S.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DKBitXsh.js"];
export const stylesheets = ["_app/immutable/assets/2.RKBqQ8kL.css"];
export const fonts = [];
