import Head from 'next/head'

type NextHeadProps = {
  title?: string
  description?: string
}
export const NextHead = ({
  title,
  description = 'A Trace Finance page',
}: NextHeadProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)
