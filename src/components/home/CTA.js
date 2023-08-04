export default function CTA(){
    return(
    <div className="bg-gray-50">
      <div className="mx-auto max-w-full py-12 lg:flex lg:items-center lg:justify-between lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Conoce la magia que poseen las plantas medicinales</span>
          <span className="block text-green-600">Dejar que la naturaleza cure cualquier dolencia</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://herbacare.onrender.com/remedios"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
            >
              Ver Remedios
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
          </div>
        </div>
      </div>
    </div>
    )
}