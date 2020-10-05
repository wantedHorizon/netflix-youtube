export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Suspense',
        data: films.filter((item) => item.genre === 'suspense'),
      },
      {
        title: 'Romance',
        data: films.filter((item) => item.genre === 'romance'),
      },
    ],
  };
}
