import Head from 'next/head'
import { fetchApi, baseUrl } from '../utils/fetchApi';

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <div>
      <Head>
        <title>Welcome to City Homes</title>
        <meta name="description" content="Buy or rent properties" />
      </Head>
      <h1>Welcome to City Homes</h1>
    </div>
  )
}

export async function getStaticProps() {
  const saleParams = {
    locationExternalIDs: '5002,6020',
    purpose: 'for-sale',
    hitsPerPage: '10',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly'
  };
  const rentParams = {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '10',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly'
  };
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list`, saleParams);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list`, rentParams);
  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits
    }
  }
}
