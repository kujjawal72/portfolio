import React from 'react'
import Header from './Header'

export default function Layout({children}:{children:React.ReactNode}){
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer style={{padding:24}}>
        <div className="container meta">© {new Date().getFullYear()} Ujjawal Kumar — Contact: kumarujjawal072@gmail.com</div>
      </footer>
    </div>
  )
}
