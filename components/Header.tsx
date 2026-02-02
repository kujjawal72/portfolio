import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="header container">
      <div>
        <Link href="/" className="link">
          Ujjawal Kumar — Android
        </Link>
      </div>

      <div className="cta">
        <a className="button" href="/resume.txt" download>
          Download Resume
        </a>

        <a className="button" href="#contact">
          Contact
        </a>
      </div>
    </header>
  )
}
