import { useState } from 'react';
import useFetchBodies from '../hooks/useFetchBodies';
import BodiesGrid from '../components/BodiesGrid';
import { CircularProgress, Typography, Container, TextField, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { bodies, loading, error } = useFetchBodies();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    mass: '',
    density: '',
    gravity: '',
    diameter: '',
    sort: '',
  });

  const handleRandomExplore = () => {
    if (bodies.length > 0) {
      const randomBody = bodies[Math.floor(Math.random() * bodies.length)];
      navigate(`/cuerpo/${randomBody.id}`);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredBodies = bodies
    .filter((body) => {
      if (filters.mass && body.mass?.massValue < parseFloat(filters.mass)) return false;
      if (filters.density && body.density < parseFloat(filters.density)) return false;
      if (filters.gravity && body.gravity < parseFloat(filters.gravity)) return false;
      if (filters.diameter && body.meanRadius * 2 < parseFloat(filters.diameter)) return false;
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === 'alphabetical') {
        return a.englishName.localeCompare(b.englishName);
      }
      return 0;
    });

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" align="center" my={2}>
        Filter Celestial Bodies
      </Typography>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <TextField
          label="Min Mass"
          name="mass"
          type="number"
          value={filters.mass}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Min Density"
          name="density"
          type="number"
          value={filters.density}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Min Gravity"
          name="gravity"
          type="number"
          value={filters.gravity}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Min Diameter"
          name="diameter"
          type="number"
          value={filters.diameter}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Sort"
          name="sort"
          select
          value={filters.sort}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="alphabetical">Alphabetical</MenuItem>
        </TextField>
        <Button variant="contained" onClick={handleRandomExplore}>
          Explore Random Body
        </Button>
      </div>
      <BodiesGrid bodies={filteredBodies} onRandomExplore={handleRandomExplore} />
    </Container>
  );
};

export default Home;