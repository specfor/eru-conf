import './Team.css';

export default function Team() {
  const chair = {
    name: "Dr. J.R Gamage",
    role: "Symposium Chair",
    image: "https://placehold.co/250x250/ccc/333?text=JR+Gamage"
  };

  const coChairs = [
    {
      name: "Dr. Gayani K. Nandasiri",
      role: "Symposium Co-Chair",
      image: "https://placehold.co/200x200/ccc/333?text=Gayani+Nandasiri"
    },
    {
      name: "Dr. Kasun De Silva",
      role: "Symposium Co-Chair",
      image: "https://placehold.co/200x200/ccc/333?text=Kasun+De+Silva"
    }
  ];

  const committee = [
    {
      name: "Mr Shanaka Dasanayaka",
      role: "Local Organizing Chair",
      image: "https://placehold.co/200x200/ccc/333?text=Shanaka"
    },
    {
      name: "Mr Amantha Mawathage",
      role: "Local Organizing Chair",
      image: "https://placehold.co/200x200/ccc/333?text=Amantha"
    },
    {
      name: "Ms Nisali Dharmasri",
      role: "Local Organizing Chair",
      image: "https://placehold.co/200x200/ccc/333?text=Nisali"
    },
    {
      name: "Anushka Subasinghe",
      role: "Webmaster",
      image: "https://placehold.co/200x200/ccc/333?text=Anushka"
    }
  ];

  return (
    <section id="team" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-title">Our <span className="text-primary">Team</span></h2>
          <div className="divider"></div>
        </div>

        <div className="team-group-container">
          {/* Symposium Chair */}
          <div className="team-group">
            <h3 className="team-group-title">Symposium Chair</h3>
            <div className="flex justify-center">
              <div className="team-card team-card-lg">
                <div className="team-img-wrapper">
                  <div className="team-img-overlay"></div>
                  <img src={chair.image} alt={chair.name} className="team-img" width={250} height={250} />
                </div>
                <div className="team-card-body">
                  <p className="team-name text-lg">{chair.name}</p>
                  <p className="team-role">{chair.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Symposium Co-Chairs */}
          <div className="team-group">
            <h3 className="team-group-title">Symposium Co-Chairs</h3>
            <div className="flex-md justify-center items-center gap-6 team-flex-mobile">
              {coChairs.map((member, index) => (
                <div key={index} className="team-card team-card-md">
                  <div className="team-img-wrapper">
                    <div className="team-img-overlay"></div>
                    <img src={member.image} alt={member.name} className="team-img" width={200} height={200} />
                  </div>
                  <div className="team-card-body">
                    <p className="team-name text-md">{member.name}</p>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizing Committee */}
          <div className="team-group">
            <h3 className="team-group-title">Organizing Committee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {committee.map((member, index) => (
                <div key={index} className="team-card team-card-md mx-auto-mobile">
                  <div className="team-img-wrapper">
                    <div className="team-img-overlay"></div>
                    <img src={member.image} alt={member.name} className="team-img" width={200} height={200} />
                  </div>
                  <div className="team-card-body">
                    <p className="team-name text-md">{member.name}</p>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
