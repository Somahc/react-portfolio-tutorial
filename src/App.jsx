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
    </>
  )
}

export default App
