import Head from 'next/head'
import { fetchApi, baseUrl } from '../utils/fetchApi';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Home({ propertyForSale, propertyForRent }) {
  console.log(propertyForSale);
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Welcome to City Homes</title>
        <meta name="description" content="Buy or rent properties" />
      </Head>
      <Header />
      <Container maxWidth="md">
        <Grid container className={classes.root} spacing={2}>
          {propertyForSale.map(property => <PropertyCard property={property} key={property.id} />)}
        </Grid>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const saleParams = {
    locationExternalIDs: '5002',
    purpose: 'for-sale',
    hitsPerPage: '10'
  };
  const rentParams = {
    locationExternalIDs: '5002',
    purpose: 'for-rent',
    hitsPerPage: '10'
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
