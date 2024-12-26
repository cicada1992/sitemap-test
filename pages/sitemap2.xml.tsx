import { GetServerSideProps } from "next";

const HOST = 'https://sitemap-test.vercel.app'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sites = [
    { path: '/path1', date: '2024-10-10' },
    { path: '/path2', date: '2024-10-12' },
  ]
  const contents = sites
    .map(
      ({ path, date }) => `
      <url>
        <loc>${HOST}${path}</loc>
        <lastmod>${date}</lastmod>
      </url>`,
    )
    .join('');
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${contents}
    </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemapIndex);
  res.end();

  return { props: {} };
}

export default function SitemapIndex() {
  return null;
}