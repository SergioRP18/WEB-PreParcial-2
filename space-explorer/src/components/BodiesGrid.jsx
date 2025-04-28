import { Grid, Button, Typography } from '@mui/material';
import BodyCard from './BodyCard';

const BodiesGrid = ({ bodies, onRandomExplore }) => {
  return (
    <>
      <Typography variant="h4" align="center" my={2}>
        Celestial Bodies
      </Typography>
      <Button variant="contained" onClick={onRandomExplore} sx={{ mb: 2 }}>
        Explore Random Body
      </Button>
      <Grid container spacing={2}>
        {bodies.map((body) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={body.id}>
            <BodyCard body={body} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BodiesGrid;