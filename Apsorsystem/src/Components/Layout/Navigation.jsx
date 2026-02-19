import React, { useEffect } from 'react'
import Logo from './Logo'
import NavigateMenu from './NavigateMenu'
import Searchbar from '../Pages/Public/Searchbar'


export default function () {

	const [MenuOpen, setMenuOpen] = React.useState(false)
	const [Scrolled, setScrolled] = React.useState(false)
	const toggleMenu = () => {
		setMenuOpen(!MenuOpen)
	}
	const handleScroll = () => setMenuOpen(false)
	useEffect(() => {
		const OnScroll = () => {
			setScrolled(window.scrollY > 50)
		};
		window.addEventListener('scroll', OnScroll);
		return () => window.removeEventListener('scroll', OnScroll);

	}, []);

  return (
	<>
	<div className={`w-full z-20 px-[20%] sm:px-[10%] py-4 flex items-center gap-8 fixed top-0 left-0 transition-all duration-300 ${Scrolled ? 'bg-white shadow-md border-b border-gray-400' : 'bg-white/20 backdrop-blur-md border-b border-gray-400'}`}>

	  <Logo/>
	  <Searchbar/>
	  <div className="ml-auto">
	    <NavigateMenu MenuOpen={MenuOpen} toggleMenu={toggleMenu}/>
	  </div>
	
	</div>
	</>
  )
}
