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

  // overlay stamp
  showCornerStamp = true,
  cornerStampPosition = 'topRight', // 'topRight' | 'bottomLeft'
  stampSrc = '/maroc_stamp.png',
  stampTiltDeg = -8,

  // make the inner white panel narrower/taller
  insetSide = '10%',
  insetTB = '8%',

  // avatar crop tuning (optional but helpful)
  avatarScale = 0.93, // makes tightly-cropped portraits feel consistent
  avatarObjectPosition = '50% 35%', // slightly higher crop for faces; change per person if needed

  // layout + sizing
  size = 'xs', // 'xs' | 'sm' | 'md'
  containerClass = 'w-full max-w-[220px] sm:max-w-[260px]',
  sizes = '(max-width: 640px) 80vw, 260px',
}) {
  const SIZES = {
    xs: {
      pad: 'p-3',
      // IMPORTANT: use real Tailwind sizes + keep square
      avatar: 'h-36 w-36',
      name: 'text-lg',
      role: 'text-sm',
      bio: 'text-sm',
      stamp: {
        w: 250,
        h: 250,
        offsetTopRight: '-top-10 -right-28',
        offsetBottomLeft: '-bottom-10 -left-32',
      },
    },
    sm: {
      pad: 'p-4',
      avatar: 'h-40 w-40',
      name: 'text-xl',
      role: 'text-sm',
      bio: 'text-sm',
      stamp: {
        w: 72,
        h: 72,
        offsetTopRight: '-top-3 -right-3',
        offsetBottomLeft: '-bottom-3 -left-3',
      },
    },
    md: {
      pad: 'p-6',
      avatar: 'h-48 w-48',
      name: 'text-2xl',
      role: 'text-base',
      bio: 'text-sm',
      stamp: {
        w: 88,
        h: 88,
        offsetTopRight: '-top-4 -right-4',
        offsetBottomLeft: '-bottom-4 -left-4',
      },
    },
  }

  const sz = SIZES[size] ?? SIZES.xs

  const stampOffset =
    cornerStampPosition === 'bottomLeft'
      ? sz.stamp.offsetBottomLeft
      : sz.stamp.offsetTopRight

  const avatarTransform = avatarScale ? `scale(${avatarScale})` : undefined

  // Reusable avatar (same behavior in both branches)
  const Avatar = (
    <div
      className={`mb-4 relative overflow-hidden rounded-full ring-1 ring-black/5 bg-gray-100 ${sz.avatar}`}
    >
      <Image
        src={imageUrl}
        alt={name || 'Portrait'}
        fill
        sizes="(max-width: 640px) 160px, 220px"
        className="object-cover"
        style={{
          objectPosition: avatarObjectPosition,
          transform: avatarTransform,
        }}
      />
    </div>
  )

  if (showStampBorder === false)
    return (
      <div className="flex flex-col items-center text-center border rounded-lg p-6 shadow-sm hover:shadow-lg transition relative overflow-visible">
        {showCornerStamp && (
          <div
            className={`absolute ${stampOffset} z-30 pointer-events-none select-none`}
            style={{ transform: `rotate(${stampTiltDeg}deg)` }}
          >
            <Image src={stampSrc} alt="" width={sz.stamp.w} height={sz.stamp.h} draggable={false} />
          </div>
        )}

        {Avatar}

        <h3 className="text-lg font-serif font-semibold text-gray-900">{name}</h3>
        <p className="text-sm font-serif text-gray-700 mb-3">{role}</p>
      </div>
    )

    return (
      <div className={`relative overflow-visible ${containerClass}`}>
        {/* Stamp border (keeps its true aspect ratio) */}
        <Image
          src={borderSrc}
          alt=""
          width={836}
          height={994}
          className="w-full h-auto pointer-events-none select-none"
          sizes={sizes}
          priority={false}
        />
    
        {/* Inner white panel */}
        <div
          className="absolute overflow-hidden bg-white pt-2"
          style={{
            top: insetTB,
            right: insetSide,
            bottom: insetTB,
            left: insetSide,
          }}
        >
          <div className={`flex h-full flex-col items-center text-center ${sz.pad}`}>
            {Avatar}
    
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
    
        {/* Corner stamp overlay */}
        {showCornerStamp && (
          <div
            className={`absolute ${stampOffset} z-30 pointer-events-none select-none drop-shadow`}
            style={{ transform: `rotate(${stampTiltDeg}deg)` }}
          >
            <Image src={stampSrc} alt="" width={sz.stamp.w} height={sz.stamp.h} draggable={false} />
          </div>
        )}
      </div>
    )
}