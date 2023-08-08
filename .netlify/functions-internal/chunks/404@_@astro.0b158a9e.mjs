export { o as onRequest, renderers } from '../renderers.mjs';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';

const page = () => import('./pages/404.astro.c813042e.mjs').then(n => n._);

export { page };
