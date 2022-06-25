import type { NextPage } from 'next'

import { NextHead } from '~/components/Infra/Head'

const Home: NextPage = () => {
  return (
    <div>
      <NextHead
        title="TraceFinance: Página inicial"
        description="Página inicial da TraceFinance"
      />
      <h1>Teste frontend</h1>
    </div>
  )
}

export default Home
