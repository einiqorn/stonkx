import Head from 'next/head'

import Header from './Header'

// TODO: Remove favicon link prod/dev check on switcaway from GH Pages domain
function BasePage({ children, location, headerMode, meta = {} }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{meta.title || 'Top Stonk 2022'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            meta.description || 'Best scammy pump and dump stonk of 2022.'
          }
        />
        <link
          rel="icon"
          type="image/png"
          href={`${
            process.env.NODE_ENV === 'production' ? '/stonkx' : ''
          }/favicon.png`}
        />
      </Head>
      <Header location={location} headerMode={headerMode} />
      <main className="grow">{children}</main>
    </div>
  )
}

export default BasePage
