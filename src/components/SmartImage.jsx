import { useState } from 'react'

export function SmartImage({ src, alt, className = '', priority = false, sizes = '100vw' }) {
  const [status, setStatus] = useState('loading')

  return (
    <div className={`smart-image ${className} is-${status}`}>
      {status === 'loading' && <span className="image-skeleton" aria-hidden="true" />}
      {status === 'error' && <p className="image-error">La imagen no está disponible.</p>}
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setStatus('ready')}
        onError={() => setStatus('error')}
      />
    </div>
  )
}
