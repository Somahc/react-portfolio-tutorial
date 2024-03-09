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
    </>
  )
}

export default App
