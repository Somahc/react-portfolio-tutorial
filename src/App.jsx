import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="a" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">ShinCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">Home</a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">About</a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">Skills</a>
            <a href="#blogs" className="hover:text-blue-400 duration-300">Blogs</a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I'm ShinCode
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit natus earum enim nam illo! Corporis quo mollitia cupiditate quis nobis.</p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">Contact</button>
          </div> 
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon.jpg" alt="ShinCode" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">About Me</h1>
            <p className="pb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus magni perferendis dolorum natus doloribus repellat odio laborum itaque, labore reprehenderit!
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, molestiae animi vel voluptatem placeat quis corrupti dolorum aliquam dolorem, repudiandae dolores, sed odio labore. Distinctio, aperiam quam. Dolores nemo dicta modi ullam repudiandae quisquam, at aspernatur voluptas iste! Aspernatur soluta assumenda eaque id, dignissimos dolorum tenetur quo minus consectetur debitis laboriosam corrupti, eligendi tempore alias illo nam unde cupiditate dicta repellat optio pariatur. Cumque illo consequuntur voluptas harum beatae quam, magni accusantium! Recusandae magni ducimus velit perspiciatis pariatur nam, quas quam aliquam quos esse ipsa fugit fugiat id numquam exercitationem! Debitis facere dolorem tempora sint molestiae labore nisi voluptas ea.</p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" fill="currentColor" /></svg>
                  </div>
                  <h2 class="text-gray-900 text-lg font-medium ml-2">Web Developer</h2>
                </div>
                <div>
                  <p className="text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam illum totam iusto hic sit provident ut consectetur eum reprehenderit?
                  </p>
                  <a className="flex mt-3 text-green-500 items-center" href="">
                    もっと見る
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" fill="currentColor" /></svg>
                  </div>
                  <h2 class="text-gray-900 text-lg font-medium ml-2">Web Developer</h2>
                </div>
                <div>
                  <p className="text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam illum totam iusto hic sit provident ut consectetur eum reprehenderit?
                  </p>
                  <a className="flex mt-3 text-green-500 items-center" href="">
                    もっと見る
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" fill="currentColor" /></svg>
                  </div>
                  <h2 class="text-gray-900 text-lg font-medium ml-2">Web Developer</h2>
                </div>
                <div>
                  <p className="text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam illum totam iusto hic sit provident ut consectetur eum reprehenderit?
                  </p>
                  <a className="flex mt-3 text-green-500 items-center" href="">
                    もっと見る
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default App
