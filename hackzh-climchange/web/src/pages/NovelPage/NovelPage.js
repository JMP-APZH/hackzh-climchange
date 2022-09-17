import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import  App  from '../../AppNovel.js'

const NovelPage = () => {
  return (
    <>
      <MetaTags title="Novel" description="Novel page" />
     
      <h1>NovelPage</h1>
         <App />
      <p>
        Find me in <code>./web/src/pages/NovelPage/NovelPage.js</code>
      </p>
      <p>
        My default route is named <code>novel</code>, link to me with `
        <Link to={routes.novel()}>Novel</Link>`
      </p>
    </>
  )
}

export default NovelPage
