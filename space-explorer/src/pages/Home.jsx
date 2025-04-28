import useFetchBodies from '../hooks/useFetchBodies';
import BodiesGrid from '../components/BodiesGrid';
import { CircularProgress, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { bodies, loading, error } = useFetchBodies();
  const navigate = useNavigate();

  const handleRandomExplore = () => {
    if (bodies.length > 0) {
      const randomBody = bodies[Math.floor(Math.random() * bodies.length)];
      navigate(`/cuerpo/${randomBody.id}`);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <BodiesGrid bodies={bodies} onRandomExplore={handleRandomExplore} />
    </Container>
  );
};

export default Home;