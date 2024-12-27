import { GetServerSideProps } from "next";

const HOST = "https://sitemap-yj.vercel.app";

const insideXMLString = (xmlContent: string): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${xmlContent}
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

  // 기본 XML 템플릿 사이에 데이터들을 담은 XML 내용을 넣어줍시다.
  const xmlContents = insideXMLString(pagesXML);

  res.setHeader("Content-Type", "application/xml");
  res.write(xmlContents);
  res.end();
  return { props: {} };
};

export default function SitemapIndex() {
  return null;
}
