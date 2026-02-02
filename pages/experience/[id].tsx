import { useRouter } from 'next/router'
import React from 'react'
import { getExperienceById } from '../../data/experiences'
import MediaGallery from '../../components/MediaGallery'

export default function ExpPage(){
  const router = useRouter()
  const { id } = router.query as { id?: string }
  if(!id) return <div className="container">Loading…</div>
  const exp = getExperienceById(id)
  if(!exp) return <div className="container">Experience not found</div>

  return (
    <section className="container">
      <a onClick={()=>router.back()} className="back-link">← Back</a>
      <div className="card">
        <h2>{exp.company}</h2>
        <div className="meta">{exp.role} · {exp.start} — {exp.end}</div>
        <h4 style={{marginTop:12}}>Overview</h4>
        <p>{exp.overview}</p>

        {exp.built && exp.built.length > 0 && (
          <>
            <h4>What I built</h4>
            <ul>
              {exp.built.map((it,i)=>(<li key={i}>{it}</li>))}
            </ul>
          </>
        )}

        {exp.decisions && exp.decisions.length > 0 && (
          <>
            <h4>Key technical decisions</h4>
            <ul>
              {exp.decisions.map((it,i)=>(<li key={i}>{it}</li>))}
            </ul>
          </>
        )}

        {exp.impact && exp.impact.length > 0 && (
          <>
            <h4>Results & Impact</h4>
            <ul>
              {exp.impact.map((it,i)=>(<li key={i}>{it}</li>))}
            </ul>
          </>
        )}

        {exp.tech && exp.tech.length > 0 && (
          <>
            <h4>Tech Stack</h4>
            <div className="tech-list">{exp.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>
          </>
        )}
      </div>

      <div style={{marginTop:16}}>
        <MediaGallery images={exp.media.images} videos={exp.media.videos} />
      </div>
    </section>
  )
}
