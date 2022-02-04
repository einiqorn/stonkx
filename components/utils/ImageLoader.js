import GithubPagesPrefix from './GithubWorkaround'

export default function imageLoader({ src }) {
  return `${GithubPagesPrefix()}/static/images/${src}`
}
