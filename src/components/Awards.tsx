import './Awards.css';

export default function Awards() {
  const awards = [
    {
      icon: "📚",
      title: "ISSN Publication",
      description: "Proceedings will be published with ISSN: 3051-4894"
    },
    {
      icon: "🔗",
      title: "DOI Registration",
      description: "The abstracts will be published with a DOI in the University of Moratuwa Library Website"
    },
    {
      icon: "🏆",
      title: "Best Extended Abstract",
      description: "Best Extended Abstract Award will be presented for the best extended abstract in each track"
    },
    {
      icon: "🥇",
      title: "Best Poster Award",
      description: "Best Poster Award will be presented for the best poster in each track"
    },
    {
      icon: "📜",
      title: "Participation Certificate",
      description: "Certificates will be awarded for all the presenters"
    }
  ];

  return (
    <section id="awards" className="section awards-section">
      <div className="awards-bg-pattern"></div>
      <img src="https://placehold.co/400x400/transparent/fff?text=Medal" alt="Medal" className="awards-medal-bg animate-float-medal" width={400} height={400} />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-title text-white">Awards &amp; <span className="text-yellow-200">Recognition</span></h2>
          <div className="divider bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div key={index} className="award-card glass">
              <div className="award-icon">{award.icon}</div>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-desc">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
