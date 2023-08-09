export { o as onRequest, renderers } from '../renderers.mjs';
import 'preact';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';

const page = () => import('./pages/about.astro.2bc0dc7a.mjs').then(n => n.c);

export { page };
