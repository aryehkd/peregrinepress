'use client'
import Image from 'next/image'

export default function PersonCard({
  // person
  name,
  role,
  showStampBorder = false,
  imageUrl,

  // stamp frame
  borderSrc = '/blank-postage-stamp-clean-template.jpg',
  aspect = '836 / 994',

  // overlay stamp (top-right)
  showCornerStamp = true,
  stampSrc = '/maroc_stamp.png', // consider renaming to `/maroc-stamp.png` or URL-encode the space
  stampTiltDeg = -8,            // subtle tilt
  // make the inner white panel narrower/taller
  insetSide = '10%',  // left & right
  insetTB = '8%',     // top & bottom

  // layout + sizing
  size = 'xs', // 'xs' | 'sm' | 'md'
  containerClass = 'w-full max-w-[220px] sm:max-w-[260px]',
  sizes = '(max-width: 640px) 80vw, 260px',
}) {
  const SIZES = {
    xs: { pad: 'p-3', avatar: 'h-45 w-45', name: 'text-lg', role: 'text-sm', bio: 'text-sm', stamp: {w: 250, h: 250, offset: '-top-10 -right-28'} },
    sm: { pad: 'p-4', avatar: 'h-64 w-64', name: 'text-xl', role: 'text-sm', bio: 'text-sm', stamp: {w: 72, h: 72, offset: '-top-3 -right-3'} },
    md: { pad: 'p-6', avatar: 'h-64 w-64', name: 'text-2xl', role: 'text-base', bio: 'text-sm', stamp: {w: 88, h: 88, offset: '-top-4 -right-4'} },
  } 
  const sz = SIZES[size] ?? SIZES.xs

  if (showStampBorder === false) 
    return ( 
      <div className="flex flex-col items-center text-center border rounded-lg p-6 shadow-sm hover:shadow-lg transition relative overflow-visible">
        {/* Corner stamp (also shown for the simple card if desired) */}
        {showCornerStamp && (
          <div className={`absolute ${sz.stamp.offset} z-30 pointer-events-none select-none`} style={{ transform: `rotate(${stampTiltDeg}deg)` }}>
            <Image src={stampSrc} alt="" width={sz.stamp.w} height={sz.stamp.h} draggable={false} />
          </div>
        )}
        <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
          <Image src={imageUrl} alt={name} width={160} height={160} className="object-cover w-full h-full" />
        </div>
        <h3 className="text-lg font-serif font-semibold text-gray-900">{name}</h3>
        <p className="text-sm font-serif text-gray-700 mb-3">{role}</p>
      </div>
    )

  return (
    <div className={`relative overflow-visible ${containerClass}`} style={{ aspectRatio: aspect }}>
      {/* Stamp border (perforations) */}
      <Image
        src={borderSrc}
        alt=""
        fill
        className="object-contain pointer-events-none select-none"
        sizes={sizes}
        priority={false}
      />

      {/* Inner white panel – exactly inside the perforations */}
      <div
        className="absolute overflow-hidden bg-white pt-2"
        style={{
          top: insetTB,
          right: insetSide,
          bottom: insetTB,
          left: insetSide,
        }}
      >
        {/* Content */}
        <div className={`flex h-full flex-col items-center text-center ${sz.pad}`}>
          <div className={`mb-4 overflow-hidden rounded-full ring-1 ring-black/5 bg-gray-100 ${sz.avatar}`}>
            <Image
              src={imageUrl}
              alt={name || 'Portrait'}
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>

          {name && (
            <h3 className={`font-serif font-semibold text-neutral-900 ${sz.name}`}>
              {name}
            </h3>
          )}
          {role && (
            <p className={`font-serif text-neutral-700 mb-2 ${sz.role}`}>{role}</p>
          )}
          <div className="mt-auto" />
        </div>
      </div>

      {/* Corner stamp overlay (above border & panel) */}
      {showCornerStamp && (
        <div className={`absolute ${sz.stamp.offset} z-30 pointer-events-none select-none drop-shadow`} style={{ transform: `rotate(${stampTiltDeg}deg)` }}>
          <Image src={stampSrc} alt="" width={sz.stamp.w} height={sz.stamp.h} draggable={false} />
        </div>
      )}
    </div>
  )
}
