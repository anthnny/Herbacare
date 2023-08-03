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
    },
    {
      name: 'Sobre Nosotros',
      href: '/nosotros',
    },
    {
      name: 'Contacto',
      href: '/contacto',
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