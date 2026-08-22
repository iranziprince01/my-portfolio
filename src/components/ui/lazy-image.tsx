import Image, { type ImageProps } from "next/image"

type LazyImageProps = ImageProps & {
  /** Set true only for above-the-fold LCP images (e.g. hero portrait). */
  priority?: boolean
}

export function LazyImage({ priority = false, ...props }: LazyImageProps) {
  return (
    <Image
      {...props}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
    />
  )
}
