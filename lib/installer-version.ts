// Fetches latest installer release from GitHub.
// Cached for 1h via Next's fetch revalidate — після нового релізу сайт
// автоматично підхопить нову версію без redeploy.

export type InstallerVersion = {
  tag: string;
  publishedAt: string; // ISO date
  formattedDate: string; // "8 червня 2026"
};

const REPO = "asemelinsky/kodomandry-installer";
const REVALIDATE_SECONDS = 3600;

const DATE_FORMATTER = new Intl.DateTimeFormat("uk-UA", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export async function getInstallerVersion(): Promise<InstallerVersion | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { tag_name?: string; published_at?: string };
    if (!data.tag_name || !data.published_at) return null;
    return {
      tag: data.tag_name,
      publishedAt: data.published_at,
      formattedDate: DATE_FORMATTER.format(new Date(data.published_at)),
    };
  } catch {
    return null;
  }
}
