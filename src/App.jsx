import './App.css'

function App() {

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex'>
        <div className='bg-teal w-20 h-20'></div>
        <div className='bg-offWhite w-20 h-20'></div>
        <div className='bg-orange w-20 h-20'></div>
        <div className='bg-gray w-20 h-20'></div>
      </div>
	  <div className='flex'>
		<div className="w-20 h-20 bg-[#FFC107]"></div>
		<div className="w-20 h-20 bg-[#228B22]"></div>
		<div className="w-20 h-20 bg-[#FFFFFF]"></div>
		<div className="w-20 h-20 bg-[#4F4F4F]"></div>
	  </div>
      
    </div>
  )
}

export default App
