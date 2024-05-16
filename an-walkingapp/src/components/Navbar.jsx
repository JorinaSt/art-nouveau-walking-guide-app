import { useState } from 'react'; 
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { MdClose } from 'react-icons/md'; 


export default function Navbar() {
    const [dropdown, setdropdown] = useState(false)
    const showDropdown = () => 
        setdropdown(!dropdown)
    return (
    <nav className='w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white'>
      <div className='max -w -[1400px] mx-auto lg:px-3 w-full'>
        <div>
            <div>
                <div>
                    <img src="/src/assets/logo.png" alt="logo" />
                </div>
            </div>
            <ul>
                <a href="#">Home</a>
                <a href="#">Tours</a>
                <a href="#">Houses</a>
                <a href="#">Pages</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <button>Start your trail</button>
            </ul>
            {dropdown ? (
                <div onClick={showDropdown}> 
                    <MdClose />

                </div>
                ) : (
                    <div onClick={showDropdown}>
                        <HiMenuAlt3 />
                    </div>      
                )}
        </div>
         {dropdown && (
            <div>
                  <div>
                <ul>
                    <a href="#">Home</a>
                    <a href="#">Tours</a>
                    <a href="#">Houses</a>
                    <a href="#">Pages</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </ul>
                </div>
            </div>
        )}
      </div>
    </nav>
  )
}
