/* GitGub Pages root in on our repo path, thus breaking relative links
   This workaround will get around this without breaking dev.

   TODO: Remove on switchover to real domain.
*/
export default function GithubPagesPrefix() {
  return process.env.NODE_ENV === 'production' ? '/stonkx' : ''
}
