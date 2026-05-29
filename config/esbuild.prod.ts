import path from 'node:path';
import process from 'node:process';
import esbuild from 'esbuild';
import fs from 'fs-extra';

import common from './esbuild.common';

/**
 * 将 src/ 下的 HTML 文件复制到 dist/iframe/
 * 原始 HTML 保持不变，上游更新时直接替换 src/ 中的文件即可
 */
const srcDir = path.join(__dirname, '../src');
const outDir = path.join(__dirname, '../dist/iframe');

function copyHtmlToDist(): void {
	fs.ensureDirSync(outDir);
	const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));
	for (const file of files) {
		fs.copySync(path.join(srcDir, file), path.join(outDir, file));
	}
	if (files.length > 0) {
		console.log(`[copy-html] ${files.map(f => `src/${f} → dist/iframe/${f}`).join(', ')}`);
	}
}

(async () => {
	const ctx = await esbuild.context(common);
	if (process.argv.includes('--watch')) {
		await ctx.watch();
		copyHtmlToDist();
		fs.watch(srcDir, (event, filename) => {
			if (filename?.endsWith('.html')) {
				copyHtmlToDist();
			}
		});
	}
	else {
		await ctx.rebuild();
		copyHtmlToDist();
		process.exit();
	}
})();
