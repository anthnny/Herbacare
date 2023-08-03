import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import logoo from 'assets/img/logoo.png'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState, Fragment, useEffect } from 'react'
import "boxicons";

const solutions = [
    {
      name: 'Remedios',
      href: '/remedios',
      icon: IconOne,
    },
    {
      name: 'Sobre Nosotros',
      href: '/nosotros',
      icon: IconThree,
    },
    {
      name: 'Contacto',
      href: '/contacto',
      icon: IconThree,
    },
  ]

function Navbar(){

    window.onscroll = function() {scrollFunction()}
    
    function scrollFunction(){
        if(document.getElementById('navbar')){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    const [open, setOpen] = useState(false)

    return(
        <nav id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed' >

            <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-1700">
              {/* Desktop Navbar */}
              <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                  <Link to='/' className="ml-4 mt-2">
                  <img
                  src={'https://bafybeiew7xsf7ofhjqcwwfoya477g4czceckwr3yg5gbqbn3utk5eomz3a.ipfs.w3s.link/logoo.png'}
                  width={160}
                  height={160} 
                  className=""/>
                  </Link>
                  <div className="ml-4 mt-2 flex-shrink-0">
                  <NavLink to='/remedios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-green-500 mx-4">Remedios</NavLink>
                  <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-green-500 mx-4">Sobre Nosotros</NavLink>
                  <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-green-500 mx-4">Contacto</NavLink>
                  </div>
              </div>
              {/* Mobile Navbar */}
              <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                  <Link to='/' className="ml-4 mt-2">
                  <img
                  src={'https://bafybeiew7xsf7ofhjqcwwfoya477g4czceckwr3yg5gbqbn3utk5eomz3a.ipfs.w3s.link/logoo.png'}
                  width={160}
                  height={160} 
                  className=""/>
                  </Link>
                  <div className="ml-4 mt-2 flex-shrink-0">
                  <Popover className="relative">
                      {({ open }) => (
                      <>
                          <Popover.Button
                          className={`
                              ${open ? '' : 'text-opacity-90'}
                              focus:ring-none focus:outline-none`}
                          >
                          {
                              open ?
                              <i className='bx bx-x text-4xl mt-1'></i>
                              :
                              <i className='bx bx-menu text-4xl mt-1'></i>
                          }
                          </Popover.Button>

                          <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                          >
                          <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                  {solutions.map((item) => (
                                  <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                  >
                                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                      <item.icon aria-hidden="true" />
                                      </div>
                                      <div className="ml-4">
                                      <p className="text-sm font-medium text-gray-900">
                                          {item.name}
                                      </p>
                                      </div>
                                  </a>
                                  ))}
                              </div>
                              </div>
                          </Popover.Panel>
                          </Transition>
                      </>
                      )}
                  </Popover>
              </div>
              </div>
            </div>
          </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar) 

function IconOne(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <path d="M10.84 21.871L12 22a10.221 10.221 0 00-9.013-8.891L2 13l.021.173a10.001 10.001 0 008.819 8.698zm11.139-8.698L22 13l-.987.109c-4.7.523-8.427 4.2-9.013 8.891l1.16-.129a10.001 10.001 0 008.819-8.698zM18.063 5.5a2.5 2.5 0 00-3.415-.915c-.062.035-.111.081-.168.121.005-.069.02-.136.02-.206a2.5 2.5 0 10-5 0c0 .07.015.137.021.206-.057-.04-.107-.086-.168-.121a2.5 2.5 0 00-2.5 4.33c.061.035.126.056.188.085-.062.029-.127.05-.188.085a2.5 2.5 0 002.5 4.33c.062-.035.111-.081.168-.121-.006.069-.021.136-.021.206a2.5 2.5 0 105 0c0-.07-.015-.137-.021-.206.057.04.106.086.168.121a2.5 2.5 0 002.5-4.33c-.061-.035-.126-.056-.188-.085.063-.029.127-.05.188-.085a2.5 2.5 0 00.916-3.415zM12 12a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    )
  }
  
  function IconTwo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconThree() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
    )
  }