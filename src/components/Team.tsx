import Image from 'next/image';
import drGamageImg from '../images/oc/Dr.JR_Gamage.jpg';
import drGayaniImg from '../images/oc/Dr.Gayani.jpg';
import drKasunImg from '../images/oc/Dr.Kasun.jpg';
import imgAyesh from '../images/oc/Mr.Ayesh.Navodya.Bandara.jpeg';
import imgJanath from '../images/oc/Mr.Janath.de.Silva.jpeg';
import imgKulith from '../images/oc/Mr.Kulith.Thamuditha.jpeg';
import imgAyodhya from '../images/oc/Ms.A.Ayodhya.Darshani.jpeg';
import imgDinali from '../images/oc/Ms.D.A.Dinali.Nikeshi.jpeg';
import './Team.css';

export default function Team() {
  const chair = {
    name: "Dr. Gayani K. Nandasiri",
    role: "Symposium Chair",
    image: drGayaniImg
  };

  const coChairs = [
    {
      name: "Prof. JR Gamage",
      role: "Symposium Co-Chair",
      image: drGamageImg
    },
    {
      name: "Dr. Kasun De Silva",
      role: "Symposium Co-Chair",
      image: drKasunImg
    }
  ];

  const committee = [
    {
      name: "Mr. Ayesh Navodya Bandara",
      role: "Local Organizing Committee",
      image: imgAyesh
    },
    {
      name: "Mr. Janath de Silva",
      role: "Local Organizing Committee",
      image: imgJanath
    },
    {
      name: "Mr. Kulith Thamuditha",
      role: "Local Organizing Committee",
      image: imgKulith
    },
    {
      name: "Ms. A. Ayodhya Darshani",
      role: "Local Organizing Committee",
      image: imgAyodhya
    },
    {
      name: "Ms. D. A. Dinali Nikeshi",
      role: "Local Organizing Committee",
      image: imgDinali
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
                  <Image src={chair.image} alt={chair.name} className="team-img" width={250} height={250} />
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
                    <Image src={member.image} alt={member.name} className="team-img" width={200} height={200} />
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
            <div className="flex flex-col gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Row 1: 3 Members */}
              <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 lg:gap-12">
                {committee.slice(0, 3).map((member, index) => (
                  <div key={index} className="team-card team-card-md mx-auto-mobile">
                    <div className="team-img-wrapper">
                      <div className="team-img-overlay"></div>
                      <Image src={member.image} alt={member.name} className="team-img" width={200} height={200} />
                    </div>
                    <div className="team-card-body">
                      <p className="team-name text-md">{member.name}</p>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Row 2: 2 Members */}
              <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 lg:gap-12">
                {committee.slice(3, 5).map((member, index) => (
                  <div key={index + 3} className="team-card team-card-md mx-auto-mobile">
                    <div className="team-img-wrapper">
                      <div className="team-img-overlay"></div>
                      <Image src={member.image} alt={member.name} className="team-img" width={200} height={200} />
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
      </div>
    </section>
  );
}
