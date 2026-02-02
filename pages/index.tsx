import React from 'react'
import Hero from '../components/Hero'
import { experiences } from '../data/experiences'
import ExperienceCard from '../components/ExperienceCard'
import { skills, highlights, contact } from '../data/site'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container" style={{paddingTop:8}}>
        <h2>Experience</h2>
        <div className="grid" style={{marginTop:12}}>
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </section>

      <section className="container" style={{marginTop:20}}>
        <h2>Skills</h2>
        <div className="card" style={{marginTop:12}}>
          <div style={{display:'grid',gap:10}}>
            <div>
              <div className="meta">Android & UI</div>
              <div className="tech-list">{skills.android_ui.map(s => <span key={s} className="chip">{s}</span>)}</div>
            </div>
            <div>
              <div className="meta">Architecture & Patterns</div>
              <div className="tech-list">{skills.architecture.map(s => <span key={s} className="chip">{s}</span>)}</div>
            </div>
            <div>
              <div className="meta">Performance & Optimization</div>
              <div className="tech-list">{skills.performance.map(s => <span key={s} className="chip">{s}</span>)}</div>
            </div>
            <div>
              <div className="meta">Backend / Infra</div>
              <div className="tech-list">{skills.backend_infra.map(s => <span key={s} className="chip">{s}</span>)}</div>
            </div>
            <div>
              <div className="meta">Tooling</div>
              <div className="tech-list">{skills.tooling.map(s => <span key={s} className="chip">{s}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{marginTop:20}}>
        <h2>Engineering highlights</h2>
        <div className="card" style={{marginTop:12}}>
          <ul>
            {highlights.map((h,i)=> <li key={i}>{h}</li>)}
          </ul>
        </div>
      </section>

      <section id="contact" className="container" style={{marginTop:20}}>
        <h2>Contact</h2>
        <div className="card" style={{marginTop:12}}>
          <div className="meta">Email</div>
          <div style={{marginTop:6}}><a className="link" href={`mailto:${contact.email}`}>{contact.email}</a></div>
          <div className="meta" style={{marginTop:12}}>LinkedIn</div>
          <div style={{marginTop:6}}><a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin}</a></div>
          {contact.github ? (<>
            <div className="meta" style={{marginTop:12}}>GitHub</div>
            <div style={{marginTop:6}}><a className="link" href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a></div>
          </>) : null}
          <div className="meta" style={{marginTop:12}}>Phone</div>
          <div style={{marginTop:6}}>{contact.phone}</div>
        </div>
      </section>
    </div>
  )
}
