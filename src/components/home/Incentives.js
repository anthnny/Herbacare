const incentives = [
    {
      name: 'Envío natural y gratuito:',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "Nuestros consejos y remedios caseros llegan directamente a ti sin costo alguno. Descubre el poder de la naturaleza desde la comodidad de tu hogar, sin cargos ocultos.",
    },
    {
      name: 'Remedios con garantía de efectividad',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "Cada semana, te ofreceremos remedios probados y respaldados por la sabiduría ancestral. Confía en nuestra selección para mejorar tu bienestar, con resultados comprobados.",
    },
    {
      name: 'Intercambio de conocimientos:',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "Explora nuestro blog y comparte los remedios con amigos y familiares. Juntos, cultivaremos una comunidad de bienestar, intercambiando experiencias y creciendo en salud de forma natural.",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 py-24 sm:py-2 ">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Construimos nuestra web para la comunidad
              </h2>
              <p className="mt-4 text-gray-500">
              Ofrecemos una selección de remedios caseros, una valiosa fuente de soluciones naturales para mejorar tu salud. Desde aliviar dolencias comunes hasta fomentar un equilibrio holístico, nuestra enciclopedia te guiará hacia una vida más saludable. Únete a nosotros en este viaje hacia el bienestar, respaldado por la sabiduría ancestral y el poder curativo de la naturaleza. ¡Descubre el poder de la naturaleza en nuestras publicaciones semanales!
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }