export type Course = {
  name: string;
  slug: string;
  description: string;
  youtubeUrls: Array<string>;
  teachedBy: string;
  acceptDonations: boolean;
  isMadeByCommunity: boolean;
  date: Date;
};

export const communityCourses: Array<Course> = [
  {
    name: 'Git & GitHub',
    slug: 'git-and-github',
    description:
      'Git permite que puedas controlar las versiones del código que desarrollas, y GitHub hace posible que puedas trabajar en equipo de una manera más eficiente. Este curso fue diseñado y dictado a los alumnos del primer año de ingeniería en sistemas de información, de la UTN-FRT.',
    youtubeUrls: ['https://www.youtube.com/embed/WlB2fzl1vO8?si=O3O4Mi-gU65x2eyJ&vq=hd1080'],
    teachedBy: 'Agustín Sánchez, Marcelo Núñez, Germán Navarro e Iván Taddei',
    acceptDonations: false,
    isMadeByCommunity: true,
    date: new Date('2020-06-27'),
  },
  {
    name: 'Vim',
    slug: 'vim',
    description:
      'Aprendé a usar Vim, el editor de texto más poderoso del mundo. Vim permite editar y navegar código de una manera súper veloz. Podés usar Vim en la consola o instalar un plugin dentro de tu IDE favorito para agilizar tu codificación usando los atajos de teclado de Vim.',
    youtubeUrls: [
      'https://www.youtube.com/embed/C-C4xoCj_Lw?si=ik0XqUGkz4Xw7hZ4',
      'https://www.youtube.com/embed/0s1ccWvLGYw?si=ph1rPlNvBoobmbG8',
      'https://www.youtube.com/embed/9VIma5G-gUc?si=dHyZoKRqvc3Vpi0S',
      'https://www.youtube.com/embed/WVzklaR68PM?si=1b4QIepxrw44Tw45',
    ],
    teachedBy: 'Esteban Sánchez',
    acceptDonations: false,
    isMadeByCommunity: true,
    date: new Date('2020-10-12'),
  },
  {
    name: 'LaTeX',
    slug: 'latex',
    description:
      'Aprende a usar LaTeX, el sistema de composición de textos más utilizado en la academia. LaTeX permite crear documentos que se ven profesionales y que se diferencian de los documentos de texto típicos, además de que podés editarlos utilizando código, permitiendo que uses tu tiempo en lo que importa: escribir tu documento.',
    youtubeUrls: [
      'https://www.youtube.com/embed/mYlqUGYp0_U?si=50HztuG6GLT1MI1J',
      'https://www.youtube.com/embed/OZtjjLzpyWE?si=fEafCnewwKCIjFEZ',
      'https://www.youtube.com/embed/ZzGJGiY0v70?si=ITMznfAjCBdRL2QT',
    ],
    teachedBy: 'Esteban Sánchez',
    acceptDonations: false,
    isMadeByCommunity: true,
    date: new Date('2020-12-31'),
  },
];

export const externalCourses: Array<Course> = [
  {
    name: 'HTML & CSS',
    slug: 'html-and-css',
    description:
      'HTML y CSS son los lenguajes que nos permiten crear las páginas web que usamos todos los días. Este curso es una excelente introducción a estos lenguajes, y está recomendado para todos aquellos que quieran aprender a crear sus propias páginas web.',
    youtubeUrls: ['https://www.youtube.com/embed/WlB2fzl1vO8?si=O3O4Mi-gU65x2eyJ&vq=hd1080'],
    teachedBy: 'Dalto',
    acceptDonations: false,
    isMadeByCommunity: false,
    date: new Date('2024-01-01'),
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    description:
      'JavaScript es el lenguaje de programación que nos permite crear páginas web interactivas. Este curso es una excelente introducción a este lenguaje, y está recomendado para todos aquellos que quieran aprender a programar.',
    youtubeUrls: [
      'https://www.youtube.com/embed/z95mZVUcJ-E?si=IQ2RwTRAe2cLp754',
      'https://www.youtube.com/embed/xOinGb2MZSk?si=5CL18bgx-m8mURCf',
      'https://www.youtube.com/embed/EbMi1Qj4rVE?si=VZP36Vkh_qIW1kRt',
    ],
    teachedBy: 'Dalto',
    acceptDonations: false,
    isMadeByCommunity: false,
    date: new Date('2024-01-01'),
  },
  {
    name: 'Desarrollo Web con Python y JavaScript',
    slug: 'web-programming-with-python-and-js',
    description:
      'Python es un lenguaje de programación interpretado de alto nivel, que se utiliza para desarrollar aplicaciones web, scripts, software científico, inteligencia artificial y más.',
    youtubeUrls: [
      'https://www.youtube.com/embed/EOZDjqwvVG8?si=XiK7kgqIgmhl1tHc',
      'https://www.youtube.com/embed/1u2qu-EmIRc?si=EJbkFAbSaUCa5aQ2',
      'https://www.youtube.com/embed/XQs5KcUj-Do?si=Y8wf9nKEQoCTTRIX',
      'https://www.youtube.com/embed/j5wysXqaIV8?si=bF36BJdeDxmoy1Jq',
      'https://www.youtube.com/embed/Eda-NmcE5mQ?si=__0xIv2cARYK5Q4V',
      'https://www.youtube.com/embed/24Kf3v7kZyE?si=aUwVLbn4FVF5p5aw',
      'https://www.youtube.com/embed/xMs4ER1rcLg?si=IBbTdO9QEfvF5Zeo',
      'https://www.youtube.com/embed/ZRV7JCXAFTs?si=fICWtDWWWJ0rl_ZL',
      'https://www.youtube.com/embed/ZjAMRnCu-84?si=sLxZIEEUSTI-_u8q',
      'https://www.youtube.com/embed/alMRNeRJKUE?si=ZtvDhk1UPeultej4',
      'https://www.youtube.com/embed/2A7nVdAoqqk?si=phCZIsdMKsak4lxO',
      'https://www.youtube.com/embed/9dLTFp-1w_A?si=YUy9SKs7RPa0AOKv',
    ],
    teachedBy: 'Harvard CS50',
    acceptDonations: false,
    isMadeByCommunity: false,
    date: new Date('2024-01-01'),
  },
];

export const getCourseBySlug = (slug: string) =>
  communityCourses.find((course) => course.slug === slug) ||
  externalCourses.find((course) => course.slug === slug);