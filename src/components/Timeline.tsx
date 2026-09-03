import './Timeline.css';

export default function Timeline() {
  return (
    <section id="timeline" className="section section-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-title">Important <span className="text-accent">Dates</span></h2>
          <div className="divider bg-yellow"></div>
        </div>
        
        <div className="flex flex-col items-center mt-16 timeline-container">
          <div className="timeline-item group">
            <div className="timeline-content left">
              <div className="timeline-card">
                <div className="timeline-date text-primary font-bold">September 30, 2026</div>
              </div>
            </div>
            <div className="timeline-icon-wrapper">
              <div className="timeline-line"></div>
              <div className="timeline-icon">📝</div>
            </div>
            <div className="timeline-content right">
              <div className="timeline-card-desktop">
                <div className="timeline-title">Extended Abstract Submission</div>
              </div>
            </div>
            
            {/* Mobile Title (visible only on mobile) */}
            <div className="timeline-mobile-title">
              Extended Abstract Submission
            </div>
          </div>

          <div className="timeline-item group">
            <div className="timeline-content left">
              <div className="timeline-card">
                <div className="timeline-date text-primary font-bold">October 30, 2026</div>
              </div>
            </div>
            <div className="timeline-icon-wrapper">
              <div className="timeline-line"></div>
              <div className="timeline-icon">✉️</div>
            </div>
            <div className="timeline-content right">
              <div className="timeline-card-desktop">
                <div className="timeline-title">Acceptance Notification</div>
              </div>
            </div>
            <div className="timeline-mobile-title">Acceptance Notification</div>
          </div>

          <div className="timeline-item group">
            <div className="timeline-content left">
              <div className="timeline-card">
                <div className="timeline-date text-primary font-bold">November 15, 2026</div>
              </div>
            </div>
            <div className="timeline-icon-wrapper">
              <div className="timeline-line"></div>
              <div className="timeline-icon">✅</div>
            </div>
            <div className="timeline-content right">
              <div className="timeline-card-desktop">
                <div className="timeline-title">Final Submission &amp; Registration</div>
              </div>
            </div>
            <div className="timeline-mobile-title">Final Submission &amp; Registration</div>
          </div>

          <div className="timeline-item group">
            <div className="timeline-content left">
              <div className="timeline-card">
                <div className="timeline-date text-primary font-bold">December 2, 2026</div>
              </div>
            </div>
            <div className="timeline-icon-wrapper">
              <div className="timeline-icon">🎉</div>
            </div>
            <div className="timeline-content right">
              <div className="timeline-card-desktop">
                <div className="timeline-title">Symposium</div>
              </div>
            </div>
            <div className="timeline-mobile-title">Symposium</div>
          </div>

        </div>
      </div>
    </section>
  );
}
