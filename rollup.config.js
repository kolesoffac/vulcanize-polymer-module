import progress from 'rollup-plugin-progress';
import cleanup from 'rollup-plugin-cleanup';

export default {
	entry: 'imports.vulcanized.js',
	dest: 'imports.vulcanized.js',

	plugins: [
		cleanup(),
		progress({
		}),
	]
};