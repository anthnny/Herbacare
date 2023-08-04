const posts = [
    {
      title: 'Manzanilla',
      href: 'https://herbacare.onrender.com/remedios/manzanilla',
      category: { name: 'Anti Inflamatorias', href: 'https://herbacare.onrender.com/category/anti_inflamatorias' },
      description:
        'La Manzanilla es una planta medicinal popular y versátil que ha sido utilizada durante siglos debido a sus propiedades curativas. También conocida como "camomila", esta hierba aromática es nativa de Europa y se ha extendido a muchas otras partes del mundo debido a sus increíbles beneficios para la salud.',
      date: 'August 3, 2023',
      datetime: '2023-08-03',
      imageUrl:
        'https://bafybeiej7jvsc3yj6tcm2uvjuhunqdb6oli6j3e5q55qbmwzuihoq7as24.ipfs.w3s.link/manzanilla.jpeg',
      readingTime: '2 min',
    },
    {
      title: 'Menta',
      href: 'https://herbacare.onrender.com/remedios/hierba-de-menta',
      category: { name: 'Expectorantes', href: 'https://herbacare.onrender.com/category/expectorantes' },
      description:
        'La menta es una planta herbácea perenne perteneciente a la familia Lamiáceas. Es conocida por su característico aroma refrescante y su sabor mentolado. Sus hojas son de forma ovalada, con bordes dentados y presentan un intenso color verde brillante. Algunas variedades de menta pueden tener manchas más claras en sus hojas.',
      date: 'August 03, 2023',
      datetime: '2023-08-03',
      imageUrl:
        'https://bafybeif444yhenobexqyza4jquronpckgsjmv3vbfwkhn62bpdjygzyd24.ipfs.w3s.link/menta.jpeg',
      readingTime: '5 min',
    },
    {
      title: 'Orégano',
      href: 'https://herbacare.onrender.com/remedios/hierba-oregano',
      category: { name: 'Anti Inflamatorias', href: 'https://herbacare.onrender.com/category/anti_inflamatorias' },
      description:
        'El Orégano es una planta herbácea aromática que pertenece a la familia Lamiáceas y es originaria de la región mediterránea. Sus hojas verdes y pequeñas contienen aceites esenciales con poderosas propiedades curativas. El orégano ha sido valorado por sus beneficios para la salud y su sabor distintivo en la cocina, lo que lo convierte en un recurso valioso para aquellos que buscan opciones naturales para mejorar su bienestar.',
      date: 'August 03, 2023',
      datetime: '2023-08-03',
      imageUrl:
        'https://images.eatsmarter.com/sites/default/files/oregano_us.gif',
      readingTime: '11 min',
    },
  ]
  
  export default function Remedies() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Algunos de nuestras publicaciones</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }