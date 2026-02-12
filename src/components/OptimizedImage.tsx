import Image, { type ImageProps } from "next/image";

/**
 * Preset responsive sizes for common layouts.
 * Avoids serving oversized images (e.g. 750px for a 362px slot).
 */
const SIZES_PRESETS = {
  /** Full-width hero / poster */
  hero: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px",
  /** Card in a 1/2/3-col grid */
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  /** Small thumbnail / avatar */
  thumbnail: "(max-width: 768px) 192px, 300px",
  /** Gallery image in project detail */
  gallery: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px",
} as const;

type SizesPreset = keyof typeof SIZES_PRESETS;

interface OptimizedImageProps extends Omit<ImageProps, "sizes"> {
  /** Use a preset or pass a custom sizes string */
  sizes?: SizesPreset | (string & {});
}

export default function OptimizedImage({
  sizes = "card",
  priority,
  loading,
  alt,
  ...props
}: OptimizedImageProps) {
  const resolvedSizes =
    sizes in SIZES_PRESETS
      ? SIZES_PRESETS[sizes as SizesPreset]
      : sizes;

  return (
    <Image
      alt={alt}
      sizes={resolvedSizes}
      priority={priority}
      loading={priority ? undefined : loading ?? "lazy"}
      {...props}
    />
  );
}
