import { GetServerSideProps } from "next";

const HOST = 'https://test.com'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const sites = [
        { path: '/path-1', date: '2024-10-10' },
        { path: '/path-2', date: '2024-10-10' },
        { path: '/path-1', date: '2024-10-10' }
    ]
    const contents = sites
        .map(
            ({ path, date }) => `
      <sitemap>
        <loc>${HOST}/${path}</loc>
        <lastmod>${date}</lastmod>
      </sitemap>
    `,
        )
        .join('');
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${contents}
    </sitemapindex>`;

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemapIndex);
    res.end();

    return { props: {} };
}

export default function SitemapIndex() {
    return null;
}