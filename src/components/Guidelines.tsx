import './Guidelines.css';

export default function Guidelines() {
  const tracks = [
    "Chemical and Process Engineering",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Earth Resources Engineering",
    "Electrical Engineering",
    "Electronic and Telecommunication Engineering",
    "Materials Science and Engineering",
    "Mechanical Engineering",
    "Supply Chain Management and Logistics",
    "Textile and Apparel Engineering",
    "Transport Management and Logistics Engineering",
    "Engineering Mathematics",
    "Statistics"
  ];

  return (
    <section id="guidelines" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-title">Submission <span className="text-primary">Guidelines</span></h2>
          <div className="divider"></div>
        </div>
        
        <div className="guidelines-banner">
          <div className="guidelines-banner-icon">ℹ️</div>
          <p>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 guidelines-cards-container mt-12">
          <div className="guidelines-card">
            <div className="guidelines-card-header">
              <div className="guidelines-card-icon">📄</div>
              <h3>Extended Abstract</h3>
            </div>
            <div className="guidelines-card-body">
              The extended abstracts should be of A4 size - Two (2) pages, prepared according to this template
            </div>
            <div className="guidelines-card-footer">
              <a href="https://dms.uom.lk/s/AXHr9Wd8DkBiNR3" className="btn btn-outline">Download Template</a>
            </div>
          </div>
          
          <div className="guidelines-card">
            <div className="guidelines-card-header">
              <div className="guidelines-card-icon">🖼️</div>
              <h3>Poster</h3>
            </div>
            <div className="guidelines-card-body">
              The posters should be of A1 size - Portrait, adhering to the given guidelines and the template
            </div>
            <div className="guidelines-card-footer">
              <a href="4.ERUSPosterGuidelines.pdf" className="btn btn-outline">Download Template</a>
            </div>
          </div>
          
          <div className="guidelines-card">
            <div className="guidelines-card-header">
              <div className="guidelines-card-icon">🎨</div>
              <h3>Sample Poster Design</h3>
            </div>
            <div className="guidelines-card-body">
              You can also refer to the sample poster design
            </div>
            <div className="guidelines-card-footer">
              <a href="https://dms.uom.lk/s/AXHr9Wd8DkBiNR3" className="btn btn-outline">Download Template</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a href="https://cmt3.research.microsoft.com/ERUS2026/Track/1/Submission/Create" className="btn btn-submit animate-pulse">Submit Your Work</a>
        </div>

        <div className="tracks-container mt-16">
          <p className="tracks-title">ERU 2026 accepts extended abstracts of research under following tracks</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tracks.map((track, index) => (
              <div key={index} className="track-item">
                <div className="track-bullet"></div>
                <span>{track}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
