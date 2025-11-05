'use client'

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">MineAI</div>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="cta-button">Get Started</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                The Future of Mining is Intelligent
              </h1>
              <p className="hero-subtitle">
                Harness the power of AI to optimize your mining operations, increase efficiency by 300%,
                and unlock unprecedented insights from your data
              </p>
              <div className="hero-buttons">
                <button className="primary-button">Start Free Trial</button>
                <button className="secondary-button">Watch Demo</button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Powered by Advanced AI</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3 className="feature-title">Predictive Analytics</h3>
                <p className="feature-description">
                  AI-driven forecasting predicts equipment failures before they happen,
                  reducing downtime by up to 40% and saving millions in maintenance costs
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Real-Time Optimization</h3>
                <p className="feature-description">
                  Machine learning algorithms continuously optimize extraction processes,
                  maximizing yield while minimizing energy consumption and environmental impact
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3 className="feature-title">Safety Intelligence</h3>
                <p className="feature-description">
                  Computer vision and sensor fusion detect hazards in real-time,
                  protecting your workforce and ensuring compliance with safety regulations
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Data Visualization</h3>
                <p className="feature-description">
                  Transform complex mining data into actionable insights with intuitive dashboards
                  and AI-powered recommendations for strategic decision-making
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 className="feature-title">Geological Mapping</h3>
                <p className="feature-description">
                  AI-enhanced 3D geological models identify optimal mining locations
                  and predict resource distribution with unprecedented accuracy
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3 className="feature-title">Automated Workflows</h3>
                <p className="feature-description">
                  Intelligent automation streamlines operations from extraction to processing,
                  reducing labor costs and human error while increasing productivity
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div>
                <div className="stat-number">300%</div>
                <div className="stat-label">Efficiency Increase</div>
              </div>
              <div>
                <div className="stat-number">40%</div>
                <div className="stat-label">Downtime Reduction</div>
              </div>
              <div>
                <div className="stat-number">$50M+</div>
                <div className="stat-label">Cost Savings</div>
              </div>
              <div>
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Prediction Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="features">
          <div className="container">
            <h2 className="section-title">Enterprise-Grade Technology</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3 className="feature-title">Deep Learning Models</h3>
                <p className="feature-description">
                  State-of-the-art neural networks trained on millions of mining data points
                  to deliver insights that were previously impossible to obtain
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">☁️</div>
                <h3 className="feature-title">Cloud Infrastructure</h3>
                <p className="feature-description">
                  Scalable, secure cloud platform processes terabytes of data in real-time,
                  accessible from anywhere in the world with enterprise-grade security
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3 className="feature-title">IoT Integration</h3>
                <p className="feature-description">
                  Seamlessly connects with existing sensors and equipment,
                  creating a unified intelligent mining ecosystem
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Ready to Transform Your Mining Operations?</h2>
            <p className="cta-description">
              Join industry leaders who have already revolutionized their mining operations with MineAI
            </p>
            <button className="primary-button">Schedule a Demo</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Product</h3>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#api">API</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul className="footer-links">
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 MineAI. All rights reserved. Transforming the mining industry with artificial intelligence.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
