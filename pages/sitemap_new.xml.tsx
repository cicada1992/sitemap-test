import { GetServerSideProps } from "next";

const HOST = "https://sitemap-yj.vercel.app";

const getXMLContents = (xmlContent: string): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlContent.trim()}
    </urlset>
  `;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sites = [
    { path: "/path1", date: "2024-10-10" },
    { path: "/path2", date: "2024-10-12" },
  ];
  let pagesXML = "";
  for (const { path, date } of sites) {
    pagesXML += `
      <url>
        <loc>${HOST}${path}</loc>
        <lastmod>${date}</lastmod>
      </url>
    `;
  }

  const xmlContents = getXMLContents(pagesXML);
  res.setHeader("Content-Type", "application/xml");
  res.write(xmlContents);
  res.end();
  return { props: {} };
};

export default function SitemapIndex() {
  return null;
}
