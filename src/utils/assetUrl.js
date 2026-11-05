// Vite's config also imports newsData in Node, where import.meta.env is absent.
const assetBaseUrl = import.meta.env?.DEV
  ? ""
  : (import.meta.env?.VITE_ASSET_BASE_URL || "").replace(/\/+$/, "");

export function assetUrl(path) {
  return `${assetBaseUrl}/${path.replace(/^\/+/, "")}`;
}
