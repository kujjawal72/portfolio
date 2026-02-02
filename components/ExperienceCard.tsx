import Link from "next/link"
import React from "react"
import { Experience } from "../data/experiences"

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="card">
      <h3>{exp.company}</h3>

      <div className="meta">
        {exp.role} · {exp.start} — {exp.end}
      </div>

      <p style={{ marginTop: 8 }}>{exp.problem}</p>

      <div className="tech-list">
        {exp.tech.slice(0, 6).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <Link href={`/experience/${exp.id}`} className="link">
          Read details
        </Link>

        {exp.playStore ? (
          <a
            className="link"
            style={{ marginLeft: 12 }}
            href={exp.playStore}
            target="_blank"
            rel="noreferrer"
          >
            Play Store
          </a>
        ) : null}
      </div>
    </article>
  )
}

