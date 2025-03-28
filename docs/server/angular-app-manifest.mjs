
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10498, hash: '4027b4cb208841da96837847749f28fa86c66955afda1a32d0fa192bb85df220', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: 'c699060f6b16602f393caa12befc6b4249388544c6a105854a547ccdb1d3082d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38228, hash: 'a1ee17c3d979e12e4825b2331fa99371aee7a72e0302159df9e90ad84a1e367c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AJLGOGOC.css': {size: 475930, hash: '0Hvvo2bx3UQ', text: () => import('./assets-chunks/styles-AJLGOGOC_css.mjs').then(m => m.default)}
  },
};
