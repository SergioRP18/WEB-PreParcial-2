import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchBodyById } from '../services/spaceService';
import { CircularProgress, Container, Typography } from '@mui/material';

const Details = () => {
  const { id } = useParams();
  const [body, setBody] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBody = async () => {
      try {
        const data = await fetchBodyById(id);
        setBody(data);
      } catch (error) {
        console.error('Error fetching body details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBody();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!body) return <Typography>No data available.</Typography>;

  return (
    <Container>
      <Typography variant="h3" my={2}>{body.englishName}</Typography>
      {Object.entries(body).map(([key, value]) => (
        <Typography key={key} variant="body1">
          <strong>{key}:</strong> {JSON.stringify(value)}
        </Typography>
      ))}
    </Container>
  );
};

export default Details;