'use client';

import Image from 'next/image';
import StampFrame from './StampFrame';

const SIZES = {
  xs: {
    avatar: 'h-32 w-32',
    name: 'text-xl',
    nameStamp: 'text-base',
    role: 'text-base',
    stamp: {
      w: 250,
      h: 250,
      offsetTopRight: '-top-10 -right-28',
      offsetBottomLeft: '-bottom-10 -left-32',
    },
  },
  sm: {
    avatar: 'h-36 w-36',
    name: 'text-2xl',
    nameStamp: 'text-lg',
    role: 'text-base',
    stamp: {
      w: 72,
      h: 72,
      offsetTopRight: '-top-3 -right-3',
      offsetBottomLeft: '-bottom-3 -left-3',
    },
  },
  md: {
    avatar: 'h-48 w-48',
    name: 'text-3xl',
    nameStamp: 'text-xl',
    role: 'text-lg',
    stamp: {
      w: 88,
      h: 88,
      offsetTopRight: '-top-4 -right-4',
      offsetBottomLeft: '-bottom-4 -left-4',
    },
  },
};

/** Square image area (width sets size, height matches), then text underneath. */
function StampCardLayout({ imageSection, textSection }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="w-full aspect-square flex-shrink-0 flex items-center justify-center p-1">
        {imageSection}
      </div>
      <div className="flex-[0_0_auto] flex flex-col items-center justify-center text-center py-1.5 px-2 shrink-0">
        {textSection}
      </div>
    </div>
  );
}

export default function PersonCard({
  name,
  role,
  showStampBorder = false,
  imageUrl,

  // stamp frame (only when showStampBorder)
  borderSrc = '/blank-postage-stamp-clean-template.jpg',
  insetSide = '6%',
  insetTB = '5%',

  // overlay stamp
  showCornerStamp = true,
  cornerStampPosition = 'topRight',
  stampSrc = '/maroc_stamp.png',
  stampTiltDeg = -8,

  avatarScale = 0.93,
  avatarObjectPosition = '50% 35%',

  size = 'xs',
  containerClass = 'w-full max-w-[220px] sm:max-w-[260px]',
  sizes = '(max-width: 640px) 80vw, 260px',
}) {
  const sz = SIZES[size] ?? SIZES.xs;
  const stampOffset =
    cornerStampPosition === 'bottomLeft'
      ? sz.stamp.offsetBottomLeft
      : sz.stamp.offsetTopRight;
  const avatarTransform = avatarScale ? `scale(${avatarScale})` : undefined;

  const avatarBaseClasses = "relative overflow-hidden rounded-full ring-1 ring-black/5 bg-gray-100";
  /* Circle: width = 100% of container, height = width (aspect 1:1). */
  const avatarFill = (
    <div className={`${avatarBaseClasses} w-full aspect-square`}>
      <Image
        src={imageUrl}
        alt={name || 'Portrait'}
        fill
        sizes="(max-width: 640px) 160px, 260px"
        className="object-cover"
        style={{
          objectPosition: avatarObjectPosition,
          transform: avatarTransform,
        }}
      />
    </div>
  );
  const avatarFixed = (
    <div className={`${avatarBaseClasses} ${sz.avatar}`}>
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
  );

  const nameClass = showStampBorder ? 'text-base sm:text-lg md:text-xl' : (sz.nameStamp ?? sz.name);
  const roleClass = showStampBorder ? 'text-sm sm:text-base md:text-lg' : sz.role;
  const textSection = (
    <>
      {name && (
        <h3 className={`font-serif font-semibold text-neutral-900 ${nameClass}`}>
          {name}
        </h3>
      )}
      {role && (
        <p className={`font-serif text-neutral-700 ${roleClass} mt-0.5`}>
          {role}
        </p>
      )}
    </>
  );

  if (!showStampBorder) {
    return (
      <div className="flex flex-col border rounded-lg shadow-sm hover:shadow-lg transition relative overflow-visible aspect-[3/4] max-w-[220px] sm:max-w-[260px] w-full">
        {showCornerStamp && (
          <div
            className={`absolute ${stampOffset} z-30 pointer-events-none select-none`}
            style={{ transform: `rotate(${stampTiltDeg}deg)` }}
          >
            <Image src={stampSrc} alt="" width={sz.stamp.w} height={sz.stamp.h} draggable={false} />
          </div>
        )}
        <StampCardLayout imageSection={avatarFixed} textSection={textSection} />
      </div>
    );
  }

  return (
    <StampFrame
      borderSrc={borderSrc}
      insetSide={insetSide}
      insetTB={insetTB}
      showCornerStamp={showCornerStamp}
      cornerStampPosition={cornerStampPosition}
      stampSrc={stampSrc}
      stampTiltDeg={stampTiltDeg}
      stampSize={sz.stamp}
      containerClass={containerClass}
      sizes={sizes}
    >
      <StampCardLayout imageSection={avatarFill} textSection={textSection} />
    </StampFrame>
  );
}
