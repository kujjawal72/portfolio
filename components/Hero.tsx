import React from 'react'

export default function Hero(){
  return (
    <section className="hero container">
      <div className="card">
        <h1 style={{margin:0}}>Ujjawal Kumar</h1>
        <div className="meta">Senior Android Engineer — Bangalore, India</div>
        <p style={{marginTop:12}}>I turn high-traffic Android apps into stable, fast, product-led experiences — by building modular, server-driven systems and shipping measurable performance and conversion wins.</p>
        <div style={{marginTop:12}} className="cta">
          <a className="button" href="/resume.txt" download>Download Resume</a>
          <a className="button" href="https://github.com/">GitHub</a>
          <a className="button" href="https://linkedin.com/">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
