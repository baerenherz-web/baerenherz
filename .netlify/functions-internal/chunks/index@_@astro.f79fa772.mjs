export { o as onRequest, renderers } from '../renderers.mjs';
import 'preact';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';

const page = () => import('./pages/index.astro.5d543ec4.mjs').then(n => n.a);

export { page };
