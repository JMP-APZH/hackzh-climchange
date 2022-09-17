import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import climatechangebackgrounder from 'web/src/assets/climate-change-backgrounder.jpg'
//import App from '../../AppNovel.js'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className='flex justify-start h-screen'>
      <iframe width="100%" length="100%" src="http://localhost:8910/novel">
      </iframe>
      </div>

      <div className='flex justify-start items-center flex-col h-screen'>
      <div
        // className='bg-red-300 h-screen'
        className='relative w-full h-full'
      >
        <img
          src={climatechangebackgrounder}
          alt='homepage-bg'
          className='w-full h-full object-cover'
        />
        </div>

        <div className='absolute flex flex-col justify-center items-center pb-80 right-0 bottom-0 left-0 bg-blackOverlay'>
      {/* <h1 className='text-green-500 text-3xl bg-gray-300'>HomePage</h1> */}

      <div className='p-4 border border-solid bg-gray-300'>
        <form className='flex flex-col'>
          <label className='text-center'>
            <p>User Year of Birth*</p>
            <input
              type="date"
              name="name"
              placeholder='Year of Birth'
              className='text-center'

            />
          </label>

          <input
            type="submit"
            value="Submit"
            onSubmit={() => {}}
            />
        </form>
      </div>

      {/* <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p> */}
      {/* <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p> */}
      </div>
      </div>
    </>
  )
}

export default HomePage