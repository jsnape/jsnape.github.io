export async function GET({params, request}) {
    return new Response(
        '<redirect><newLocation>https://snape.me/rss.xml</newLocation></redirect>',
        {
            status: 301,
            headers: {
                'content-type': 'application/xml',
                'cache-control': 's-maxage=1, stale-while-revalidate',
                'location': 'https://snape.me/rss.xml'
            }
        }
      )
    }
