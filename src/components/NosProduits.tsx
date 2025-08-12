export default function NosProduits() {
  return (
    <section className="py-1 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Produits
          </h2>
          <p className="light-italic text-gray-600 px-5">
            SAAMDIS, distributeur alimentaire à La Réunion, propose les marques MAD, Moulin d'Or, Délices de Fruits et bien d'autres à venir. Spécialisés dans la distribution de produits alimentaires, snacks, boissons et confiseries, nous répondons aux attentes du marché réunionnais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="/produits?category=sucres" className="home-card home-card-1 block">
            <h3 className="home-card-title">Snacks <br /> Sucrés</h3>
            <p className="text-white">Gâteaux, madeleines, brownies...</p>
          </a>
          <a href="/produits?category=sales" className="home-card home-card-2 block">
            <h3 className="home-card-title">Snacks <br /> Salés</h3>
            <p className="text-white">Chips et autres variétés d'encas salés</p>
          </a>
          <a href="/produits?category=confiseries" className="home-card home-card-3 block">
            <h3 className="home-card-title">Confiseries <br /> et Céréales</h3>
            <p className="text-white">Céréales sucrées, bonbons...</p>
          </a>
          <a href="/produits?category=boissons" className="home-card home-card-4 block">
            <h3 className="home-card-title">Jus et <br /> Boissons</h3>
            <p className="text-white">Boisson gazéifiée aromatisée, jus de fruits...</p>
          </a>
        </div>
      </div>
    </section>
  )
} 