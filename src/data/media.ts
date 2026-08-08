import { media, type MediaPath } from "./media-urls"

export { BLOB_HOST, media, type MediaPath } from "./media-urls"

/** Local path keys mapped to project slugs (resolved via mediaUrl). */
export const projectImageBySlug: Record<string, MediaPath> = {
  rwoga: "/rwoga.png",
  "innocent-photos": "/innocent_photos.png",
  "lumina-bridge-foundation": "/lbf.png",
  "talent-bridge-africa": "/Talent Bridge Africa.png",
  "byishimo-patrick-artist": "/patrick_byishimo.png",
  "fati-sango-portfolio": "/sango.png",
  tekriders: "/tekriders.png",
  "iarm-ministries": "/iarm.png",
  "graphic-design-work": "/graphics-sowc.png",
  "ppea-law": "/PPEA.png",
  mindsafi: "/mindsafi.png",
  bookhub: "/bookhub.png",
  "fitness-booking-devops": "/fitness-booking.jpg",
  "olearn-mobile": "/olearn.webp",
  "earthwise-mobile": "/earthwise.jpg",
  "django-file-mgmt": "/file-management.png",
  skillhub: "/skillhub.png",
  "github-academics": "/academic-projects.png",
  "honnette-portfolio": "/honnette.png",
  "patrick-portfolio": "/Patrick.png",
}

export function mediaUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  const mapped = media[path as MediaPath]
  if (mapped) return mapped
  const basename = path.split("/").pop()
  if (basename) {
    const byName = media[`/${basename}` as MediaPath]
    if (byName) return byName
  }
  return path
}

export function mediaUrls(paths: string[] | undefined): string[] | undefined {
  if (!paths?.length) return paths
  return paths.map(mediaUrl)
}

export function getProjectImage(slug: string): string {
  return mediaUrl(projectImageBySlug[slug] ?? "/tekriders.png")
}
