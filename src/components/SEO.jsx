import { useEffect } from "react";

const SITE = "Dara Newsome";

/**
 * Lightweight SEO helper. Sets document.title + meta description on
 * mount/update. No external dep needed for this small a site.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} · ${SITE}`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
      const og = document.querySelector('meta[property="og:description"]');
      if (og) og.setAttribute("content", description);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && title)
        ogTitle.setAttribute("content", `${title} · ${SITE}`);
    }
  }, [title, description]);
  return null;
}
