'use client';

import Image from 'next/image';

/**
 * Renders a postage-stamp-style frame: border image, optional corner stamp overlay,
 * and an inset content area. Use as a wrapper; pass children for the inner content.
 */
export default function StampFrame({
  borderSrc = '/blank-postage-stamp-clean-template.jpg',
  insetSide = '6%',
  insetTB = '5%',
  showCornerStamp = true,
  cornerStampPosition = 'topRight',
  stampSrc = '/maroc_stamp.png',
  stampTiltDeg = -8,
  stampSize = {
    w: 72,
    h: 72,
    offsetTopRight: '-top-3 -right-3',
    offsetBottomLeft: '-bottom-3 -left-3',
  },
  containerClass = 'w-full max-w-[220px] sm:max-w-[260px]',
  sizes = '(max-width: 640px) 80vw, 260px',
  children,
}) {
  const stampOffset =
    cornerStampPosition === 'bottomLeft'
      ? stampSize.offsetBottomLeft
      : stampSize.offsetTopRight;

  return (
    <div className={`relative overflow-visible ${containerClass}`}>
      {/* Stamp border */}
      <Image
        src={borderSrc}
        alt=""
        width={836}
        height={994}
        className="w-full h-auto pointer-events-none select-none"
        sizes={sizes}
        priority={false}
      />

      {/* Content area: inset from stamp; no bg so stamp shows where white doesn’t cover */}
      <div
        className="absolute flex flex-col overflow-hidden"
        style={{
          top: insetTB,
          right: insetSide,
          bottom: insetTB,
          left: insetSide,
        }}
      >
        {/* White box stops at 72% so the stamp border shows at the bottom */}
        <div className="bg-white flex flex-col min-h-0 w-full" style={{ height: '72%' }}>
          {children}
        </div>
      </div>

      {/* Corner stamp overlay */}
      {showCornerStamp && (
        <div
          className={`absolute ${stampOffset} z-30 pointer-events-none select-none drop-shadow`}
          style={{ transform: `rotate(${stampTiltDeg}deg)` }}
        >
          <Image
            src={stampSrc}
            alt=""
            width={stampSize.w}
            height={stampSize.h}
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}
