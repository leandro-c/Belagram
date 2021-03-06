import React from 'react'
import { Svg } from './style'
import { Link } from '@reach/router'

export const Logo = props => (
  <Link to='/'>
    <Svg
      width={436.585}
      height={120.831}
      viewBox='31.708 14.584 436.585 120.831'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-halftone-gradient'
          x1={0.5}
          y1={0.2}
          x2={0.5}
          y2={0.8}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ff2600' stopOpacity={0.8} />
          <stop offset={0.5} stopColor='#ff7100' stopOpacity={0.9} />
          <stop offset={1} stopColor='#ef7c00' />
        </linearGradient>
        <filter id='prefix__editing-halftone'>
          <feFlood result='color' floodColor='red' />
          <feImage
            xlinkHref='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNS42IiBoZWlnaHQ9IjUuNiI+CiAgICAgIDxjaXJjbGUgY3g9IjIuOCIgY3k9IjIuOCIgcj0iMS44IiBmaWxsPSJyZWQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPgo8L3N2Zz4='
            width={1000}
            height={1000}
            result='image'
          />
          <feTile in='image' result='tile' />
          <feComposite operator='in' in='SourceGraphic' in2='tile' result='dot' />
          <feComposite
            operator='in'
            in='dot'
            in2='SourceGraphic'
            result='dotted'
          />
          <feGaussianBlur in='dotted' stdDeviation={0.8} />
          <feComponentTransfer result='cutoff'>
            <feFuncA type='linear' slope={10} intercept={-3} />
          </feComponentTransfer>
        </filter>
      </defs>
      <path
        d='M.45-.32l8.06-41.92q7.55-.64 12.42-.64 4.86 0 8 .42 3.13.41 5.25 1.5 4.22 2.05 4.22 7.68 0 3.26-2.82 6.02-2.62 2.49-5.5 3.07 3.07.51 5.25 2.81 2.3 2.44 2.3 6.21 0 7.3-5.44 11.55Q26.75.64 16.06.64 8.7.64.45-.32zm17.41-20.29l-3.2 16.58q.57.06.7.06h.58q5.24 0 7.48-3.45 1.67-2.69 1.67-7.62 0-2.62-1.7-4.03-1.69-1.41-5.53-1.54zm9.72-12.61q0-5.31-5.12-5.31h-.57q-.26 0-.64.07l-2.56 13.5h.64q8.25-.19 8.25-8.26zm40.2 22.4q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zM91.2-3.52q-1.98 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58 12.99-1.28-6.21 32.38q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78zm8.22 1.6q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41L120-28.93q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zm28.19 1.15q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.36 24.58q-2.24 12.54-6.97 17.47-4.55 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.21.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.08-3.62 3.26-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13zm45.5-4.92q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02L186.62 0l-13.24 1.28 6.52-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67zm69.99 29.18q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L278.53 0l-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L259.46 0l-12.61 1.28 6.72-33.92L264-33.92l-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.8 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.86.9 2.14 1.02-.64 2.18-2.84 3.46-2.21 1.28-5.09 1.28z'
        fill='url(#prefix__editing-halftone-gradient)'
        transform='translate(98.545 104.417)'
        filter='url(#prefix__editing-halftone)'
      />
      <style />
    </Svg>
  </Link>
)
