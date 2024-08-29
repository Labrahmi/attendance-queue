import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='select-none'>
      <div className='my-4 bg-gray-50 p-2 border rounded flex items-center gap-2'>
        <div className=''>Please Select a Grade:</div>
        <select className='outline-none bg-transparent cursor-pointer' name="grade" id="grade">
          <option value="grade-1">grade-1</option>
          <option value="grade-2">grade-2</option>
          <option value="grade-3">grade-3</option>
          <option value="grade-4">grade-4</option>
          <option value="grade-5">grade-5</option>
          <option value="grade-6">grade-6</option>
          <option value="grade-7">grade-7</option>
          <option value="grade-8">grade-8</option>
          <option value="grade-9">grade-9</option>
          <option value="grade-10">grade-10</option>
          <option value="grade-11">grade-11</option>
          <option value="grade-12">grade-12</option>
        </select>
      </div>
      <div className='flex py-8'></div>
      <div className='text-center flex justify-between gap-8 font-semibold text-xl'>
        <div className='p-2 w-full text-slate-900'>students list</div>
        <div className='p-2 w-full text-green-900'>arrived</div>
        <div className='p-2 w-full text-red-900'>departed</div>
      </div>
      <div className='flex justify-between gap-8 text-left'>
        <div className='p-2 border rounded w-full bg-slate-50 text-slate-900 flex flex-col gap-1'>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Ahmed Sabiri</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Soufiane Hafssi</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Khalid Smati</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>AAMRANE AAMRANE</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>AAMRANE AAMRANE</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ABBADI ABBADI</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ABBADI ABBADI</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Abidar Abidar</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Abidar Abidar</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Abidar Abidar</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Abidar Abidar</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ABOUCH ABOUCH</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ABOUCH ABOUCH</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Abouch Abouch</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ABOUD ABOUD</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Aboumacher Aboumacher</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>Aboumacher Aboumacher</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ABOUZID ABOUZID</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ABU ABU AISHEH</div>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-slate-200 w-4 h-4 border'></span>ACCOUNIA ACCOUNIA</div>
        </div>
        <div className='p-2 border rounded w-full bg-green-50 text-green-900 flex flex-col gap-1'>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-green-200 w-4 h-4 border'></span>Barak Oubama</div>
        </div>
        <div className='p-2 border rounded w-full bg-red-50 text-red-900 flex flex-col gap-1'>
          <div className='px-4 p-2'><span className='px-3 mx-2 rounded-full bg-red-200 w-4 h-4 border'></span>Khalid Nahiri</div>
        </div>
      </div>

    </main>
  )
}

export default App
