import path from "path";
import { promises as fs } from "fs";
import Gallery, { type GalleryItem } from "./Gallery";
import GalleryStructuredData from "../seo/GalleryStructuredData";

const CATEGORY_IDS = [
  "masterclasses",
  "arrangements",
  "seasonal",
  "events",
] as const;

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function listFilesSafe(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.filter((e) => e.isFile()).map((e) => e.name);
  } catch {
    return [];
  }
}

async function buildItemsFromDirectory(baseDirAbsolute: string, webPrefix: string, category: typeof CATEGORY_IDS[number]): Promise<GalleryItem[]> {
  const files = await listFilesSafe(baseDirAbsolute);
  const imageFiles = files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return imageFiles.map((file) => {
      const src = path.posix.join(webPrefix, file);
      return {
        id: `${category}-${file}`,
        category,
        src,
        title: undefined,
        description: undefined,
      } satisfies GalleryItem;
  });
}

async function readGalleryItems(): Promise<GalleryItem[]> {
  const publicDir = path.join(process.cwd(), "public");
  const galleryRoot = path.join(publicDir, "gallery");

  // If category folders exist, use them; otherwise, fall back to flat /public/gallery
  const itemsByCategory = await Promise.all(
    CATEGORY_IDS.map(async (category) => {
      const categoryAbs = path.join(galleryRoot, category);
      const exists = await fs
        .stat(categoryAbs)
        .then((s) => s.isDirectory())
        .catch(() => false);
      if (!exists) return [] as GalleryItem[];
      return buildItemsFromDirectory(categoryAbs, path.posix.join("/gallery", category), category);
    })
  );

  let items = itemsByCategory.flat();

  if (items.length === 0) {
    // Fallback: flat files under /public/gallery are treated as "arrangements" by default
    const flatItems = await buildItemsFromDirectory(galleryRoot, "/gallery", "arrangements");
    items = flatItems;
  }

  return items;
}

export default async function GalleryServer() {
  const items = await readGalleryItems();
  return (
    <>
      <GalleryStructuredData items={items} />
      <Gallery items={items} />
    </>
  );
}


