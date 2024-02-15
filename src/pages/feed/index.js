const SITE = import.meta.env.SITE;

const headers = {
    'content-type': 'application/xml',
    'cache-control': 's-maxage=1, stale-while-revalidate',
    'location': `${SITE}/rss.xml`
};

const redirectXml = `<redirect><newLocation>${SITE}/rss.xml</newLocation></redirect>`;

export async function GET({ params, request }) {
    return new Response(redirectXml, headers);
}
