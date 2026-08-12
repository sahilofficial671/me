const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const basePath = isGithubActions && repositoryName ? `/${repositoryName}` : ''

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
}
