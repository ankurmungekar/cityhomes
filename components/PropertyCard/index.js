import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import defaultImg from '../../assets/imgs/placeholder.png';

export default function PropertyCard({ property: { title, description, coverPhoto, externalID } }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Link href={`/property/${externalID}`}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={coverPhoto ? coverPhoto.url : defaultImg}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
}
