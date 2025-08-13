

export default async function (nemik) {
  nemik
    .warn(`Processing…`)
    .gdoc('gdoc-rb', '1H1hIbhaAKlgoA9dHbjXOmEddW07eAlCGZbxmWQZSZDQ', { save: 'rhea.json' })
    .gdoc2html()
    .bibliography()
    .theme('supramundane', {
      cover: 'rhea.jpg',
      date: true,
      author: 'Robin Berjon',
      appendices: ['Acknowledgements'],
    })
    .wordCount(9_000)
    .pdf('rhea.pdf')
    .saveHTML({ to: 'rhea.html', pretty: true })
  ;
}
