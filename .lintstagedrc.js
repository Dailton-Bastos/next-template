const path = require('path')

const buildEslintCommand = (filenames) => {
	if (filenames.length > 10) return 'next lint --fix .'

	const cwd = process.cwd()
	const relativePaths = filenames.map((file) => path.relative(cwd, file))

	return `next lint --fix --file ${relativePaths.join(' --file ')}`
}

const buildPrettierCommand = 'prettier --write --ignore-unknown'

module.exports = {
	'*.{js,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
	'*.{md,json}': [buildPrettierCommand],
}
