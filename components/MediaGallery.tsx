import React, { useState } from 'react'

export default function MediaGallery({images, videos}:{images:string[], videos?:string[]}){
  const [active, setActive] = useState<string | null>(null)
  const [activeIsVideo, setActiveIsVideo] = useState(false)

  function openImage(src:string){ setActive(src); setActiveIsVideo(false) }
  function openVideo(src:string){ setActive(src); setActiveIsVideo(true) }

  return (
    <div className="card reveal">
      <h4>Media</h4>
      <div className="media-row">
        {images.map((src,i) => (
          <img key={i} src={src} alt={`screenshot-${i}`} width={240} onClick={()=>openImage(src)} style={{cursor:'pointer'}} />
        ))}
        {videos && videos.map((v,i)=> (
          <div key={i} style={{width:240}}>
            <video width="240" controls onPlay={()=>openVideo(v)}>
              <source src={v} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {active && (
        <div className="media-modal" role="dialog" aria-modal="true" onClick={()=>setActive(null)}>
          <button aria-label="Close" className="close" onClick={(e)=>{e.stopPropagation(); setActive(null)}}>✕</button>
          <div className="media-modal-content" onClick={(e)=>e.stopPropagation()}>
            {activeIsVideo ? (
              <video controls className="media-video">
                <source src={active} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={active} alt="expanded media" style={{display:'block',maxWidth:'100%',height:'auto',borderRadius:8}} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
