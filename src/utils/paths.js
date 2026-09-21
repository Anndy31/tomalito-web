// Solo las rutas internas reciben la subcarpeta de GitHub Pages.
export function withBase(path) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
}
