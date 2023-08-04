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
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function BlogList() {
    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recientes Publicaciones</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Se testigo de los beneficios que presentan las plantas.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }