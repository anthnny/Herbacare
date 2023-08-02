import { Typewriter } from "react-simple-typewriter"

function Header(){
    return(
        <main>
        <div className="relative ">
          <div className="mx-auto xl:mx-12 xl:pt-48 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12  ">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                  Remedios <span> </span>
                    <div className="inline-flex" style={{ color: '#b5ca92', fontWeight: 'bold' }}>
                      <Typewriter
                            words={['Caseros', 'Herbales']}
                            loop={0}
                            cursor
                            
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </h1>
                <p className="mt-16 text-2xl max-w-2xl leading-8 text-black">
                La naturaleza nos brinda un tesoro de remedios, pero la seguridad y el bienestar son la prioridad número uno. 
                ¡Explora el mundo de las plantas medicinales con prudencia y disfruta de sus increíbles beneficios!
                </p>
                <div className="mt-8 flex gap-x-4">
                  <a
                    href="/remedios"
                    className="inline-block rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white-600 hover:bg-green-700 hover:ring-green-700"
                  >
                    Ver Remedios
                  </a>
                </div>
              </div>
              <div className="absolute top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)] right-20 w-1/3">
                <img src="https://bafybeidlzoertkt2dnsvg75pafwxzll2uughbiuklwi5eeyexbdq7fc7rq.ipfs.w3s.link/herba.png" className='w-full h-auto object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header