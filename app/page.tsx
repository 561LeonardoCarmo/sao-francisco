import Image from "next/image"

export default function HomePage() {
  const brothers = [
    { name: 'Adriano', role: 'Centro de Formação', image: '/celula/adriano.png' },
    { name: 'Ana Clara', role: '-', image: '/avatar-female.jpg' },
    { name: 'Beatriz', role: 'Pastoreio', image: '/celula/bia.webp' },
    { name: 'Carla Adrielly', role: 'Primeiro Anúncio', image: '/celula/carla.png' },
    { name: 'Cristian', role: 'Promoção Humana', image: '/avatar-male.jpg' },
    { name: 'Dorisvaldo', role: 'Projeto Família', image: '/avatar-male.jpg' },
    { name: 'Enrique', role: 'Coord. CEV', image: '/celula/enrique.webp' },
    { name: 'Fernando', role: 'Primeiro Anúncio', image: '/celula/fernando.png' },
    { name: 'Gabriel', role: 'Música', image: '/avatar-male.jpg' },
    { name: 'Iasmyn', role: 'Kids', image: '/celula/iasmyn.png' },
    { name: 'Ingrid', role: 'Formadora Assistente', image: '/celula/ingrid.jpeg' },
    { name: 'Itala', role: '-', image: '/celula/itala.jpeg' },
    { name: 'Jéssica', role: '-', image: '/celula/jessica.jpeg' },
    { name: 'Jeniffer', role: 'Promoção Humana', image: '/celula/jeniffer.jpg' },
    { name: 'Júlia Alves', role: 'Música', image: '/celula/julia-alves.png' },
    { name: 'Júlia Nunes', role: 'Pastoreio Jovem', image: '/celula/julia-nunes.png' },
    { name: 'Juliana', role: 'Pastoreio', image: '/avatar-male.jpg' },
    { name: 'Kauã Gabriel', role: 'Pastoreio', image: '/celula/kaua-gabriel.png' },
    { name: 'Kauã Souza', role: 'Liturgia', image: '/celula/kaua-souza.png' },
    { name: 'Laura', role: 'Comunicação', image: '/avatar-female.jpg' },
    { name: 'Letícia', role: 'Pastoreio', image: '/celula/leticia.png' },
    { name: 'Luis', role: 'Comunicação', image: '/celula/luis.png' },
    { name: 'Luiz Fernando', role: 'Coord. Irradiação', image: '/celula/luiz-fernando.png' },
    { name: 'Luzivania', role: 'Formadora Comunitária', image: '/celula/luzivania.jpeg' },
    { name: 'Lyssandra', role: 'Núcleo PJJ', image: '/avatar-male.jpg' },
    { name: 'Maria José', role: 'Projeto Família', image: '/avatar-male.jpg' },
    { name: 'Mayara', role: 'Sec. de Planejamento', image: '/avatar-male.jpg' },
    { name: 'Miryan', role: 'Pastoreio', image: '/avatar-male.jpg' },
    { name: 'Pedro', role: 'Pastoreio', image: '/avatar-male.jpg' },
    { name: 'Raimundo', role: '-', image: '/avatar-male.jpg' },
    { name: 'Rosivania', role: '-', image: '/avatar-male.jpg' },
    { name: 'Silvia', role: 'Pastoreio', image: '/avatar-male.jpg' },
    { name: 'Sophia', role: 'Lanchonete', image: '/avatar-male.jpg' },
    { name: 'Vanderlei', role: 'Projeto Família', image: '/avatar-male.jpg' },
  ]

  const memories = [
    {
      name: 'Formação/Oração',
      image: '/celula/all.jpeg',
    },
    {
      name: 'Retiros de Célula',
      image: '/celula/retiro.jpeg'
    },
    {
      name: 'Confraternizações',
      image: '/celula/aniversario.jpeg'
    },
    {
      name: 'Missões e Serviços',
      image: '/celula/servico.jpeg',
    },
  ]

  return (
    <main className="min-h-screen bg-[#f4ede2] text-[#4e321c]">
      {/* Navbar */}
      <header className="w-full border-b border-[#d8c4a8]/40 bg-[#f4ede2]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-serif font-bold">Célula São Francisco</h1>
            <p className="text-sm tracking-[0.3em] uppercase text-[#8b6a47]">
              Shalom Mossoró
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-[#8b5e34] transition-colors">
              Início
            </a>
            <a href="#celula" className="hover:text-[#8b5e34] transition-colors">
              Nossa Célula
            </a>
            <a href="#irmaos" className="hover:text-[#8b5e34] transition-colors">
              Nossos Irmãos
            </a>
            <a href="#memorias" className="hover:text-[#8b5e34] transition-colors">
              Memórias
            </a>
          </nav>

          <button className="bg-[#8b5e34] hover:bg-[#704822] transition-colors text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg">
            Shalom
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-linear-to-br from-[#f5ead9] via-[#ead7bf] to-[#d6b28b]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-24">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#8b6a47] font-semibold mb-4">
              Unidos em Cristo, rumo à Santidade
            </p>

            <h2 className="text-6xl leading-tight font-serif font-bold mb-6 text-[#5a3820]">
              São Francisco,
              <span className="block text-[#9a6a3f] italic font-light">
                discípulos e ministros da paz
              </span>
            </h2>

            <p className="text-lg text-[#68472e] leading-8 max-w-xl mb-8">
              Somos uma família, escolhidos por Deus para alcançarmos juntos
              a Santidade. Cada vida aqui é um presente de Deus.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#8b5e34]/20 rounded-[3rem] blur-3xl" />

            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/30">
              <Image
                src="/celula/celula.jpeg"
                alt="Comunidade Católica"
                className="w-full h-162.5 object-cover"
                width={1024}
                height={650}
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#2e1c0f]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm uppercase tracking-[0.2em] mb-2 text-[#e9d7c0]">
                  Célula São Francisco
                </p>
                <h3 className="text-3xl font-serif font-bold">
                  “É dando que se recebe.”
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="celula" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#8b6a47] text-sm font-semibold mb-4">
              Nossa essência
            </p>

            <h2 className="text-5xl font-serif font-bold mb-6 leading-tight">
              Mais que uma célula,
              <span className="block italic text-[#9a6a3f] font-light">
                somos família.
              </span>
            </h2>

            <p className="text-lg leading-8 text-[#6a4a31] mb-8">
              Caminhamos juntos na Contemplação, Unidade e na Evangelização.
              Cada irmão tem sua história, seus dons e seu testemunho, mas
              todos compartilham do mesmo desejo: amar e servir a Deus.
            </p>

            {/* <button className="border border-[#8b5e34] text-[#8b5e34] hover:bg-[#8b5e34] hover:text-white transition-colors px-8 py-4 rounded-full font-semibold">
              Nossa Caminhada
            </button> */}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Contemplação',
                description:
                  'Unidos em Cristo, em intercessão pelos irmãos e crescendo no Amor Esponsal.',
              },
              {
                title: 'Unidade',
                description:
                  'Partilhamos alegrias, desafios e testemunhos de vida. Unidos ao Carisma, para a santidade comunitária.',
              },
              {
                title: 'Evangelização',
                description:
                  'O transbordar de tudo o que, gratuitamente, recebemos do Senhor.',
              },
              {
                title: 'Missão e Vocação',
                description:
                  'Nascemos para evangelizar. Ser santo é o nosso alvo, não por presunção, mas por vocação.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#fffaf4] border border-[#e7d6c1] rounded-4xl p-8 shadow-lg hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#e9d4bb] mb-6" />

                <h3 className="text-2xl font-serif font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-[#6a4a31] leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Irmãos */}
      <section
        id="irmaos"
        className="py-24 px-6 bg-linear-to-r from-[#3c2415] via-[#5a3820] to-[#3c2415] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <p className="uppercase tracking-[0.2em] text-[#d8b58d] text-sm font-semibold mb-4">
                Nossos irmãos
              </p>

              <h2 className="text-5xl font-serif font-bold mb-4">
                Rostos que Deus escolheu
              </h2>

              <p className="text-[#eadbc9] text-lg max-w-2xl leading-8">
                Cada sorriso, abraço e testemunho constrói a beleza da nossa
                célula.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {brothers.map((brother) => (
              <div
                key={brother.name}
                className="bg-white/10 backdrop-blur-md rounded-4xl overflow-hidden border border-white/10 hover:-translate-y-2 transition-transform"
              >
                <Image
                  src={brother.image}
                  alt={brother.name}
                  className="w-full h-72 object-cover"
                  width={1024}
                  height={300}
                />

                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold mb-2">
                    {brother.name}
                  </h3>

                  <p className="text-[#e5cfb6] text-sm">{brother.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memórias */}
      <section id="memorias" className="py-24 px-6 bg-[#f7efe3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="uppercase tracking-[0.2em] text-[#8b6a47] text-sm font-semibold mb-4">
              Memórias
            </p>

            <h2 className="text-5xl font-serif font-bold mb-6 text-[#4e321c]">
              O amor deixa marcas
            </h2>

            <p className="text-lg text-[#6a4a31] max-w-3xl mx-auto leading-8">
              Encontros, retiros, partilhas... desculpas de Deus para bebermos
              mais e mais de seu amor e de sua misericórdia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {memories.map((memory) => (
              <div
                key={memory.name}
                className="group overflow-hidden rounded-4xl shadow-xl bg-white"
              >
                <div className="overflow-hidden">
                  <Image
                    src={memory.image}
                    alt={memory.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    width={1024}
                    height={300}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold">{memory.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citação */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-linear-to-r from-[#8b5e34] to-[#5a3820] rounded-[3rem] p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <p className="text-[#e9d7c0] uppercase tracking-[0.2em] text-sm font-semibold mb-6">
              São Francisco de Assis
            </p>

            <h2 className="text-5xl font-serif leading-tight mb-8">
              “O Amor não é Amado! Este é o brado de Francisco de Assis
              que chegou aos nossos corações e os tocou”
              <p>
                Escritos, Amor Esponsal 2
              </p>
            </h2>

            <p className="text-[#eadbc9] text-lg leading-8">
              Que nossa célula seja sempre reflexo do intenso desejo de
              amar cada dia mais o Amor, de levarmos o Shalom do Pai ao
              coração dos homens, que tanto necessitam de evangelização.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contato"
        className="bg-[#2d1c10] text-[#eadbc9] px-6 py-16 border-t border-[#5a3820]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">
              Célula São Francisco
            </h3>

            <p className="leading-7 text-[#cdb79f]">
              Uma família espiritual que caminha unida na Comunidade Católica
              Shalom.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-[0.15em] text-sm">
              Navegação
            </h4>

            <ul className="space-y-3 text-[#cdb79f]">
              <li>Início</li>
              <li>Nossa Célula</li>
              <li>Nossos Irmãos</li>
              <li>Memórias</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-[0.15em] text-sm">
              Palavra
            </h4>

            <p className="italic text-[#e9d7c0] leading-8">
              “Tudo posso naquele que me fortalece.”
            </p>

            <p className="mt-3 text-sm text-[#b79d80]">Filipenses 4,13</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-[0.15em] text-sm">
              Gratidão
            </h4>

            <p className="leading-7 text-[#cdb79f]">
              Obrigado, Senhor, por cada irmão, testemunho e momento vivido em
              comunidade.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#5a3820] mt-14 pt-8 text-center text-[#b79d80] text-sm">
          © 2026 Célula São Francisco — Comunidade Católica Shalom.
        </div>
      </footer>
    </main>
  )
}
