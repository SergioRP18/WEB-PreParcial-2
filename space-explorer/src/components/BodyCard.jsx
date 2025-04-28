import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BodyCard = ({ body }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ m: 2, cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h6">{body.englishName}</Typography>
        <Typography variant="body2">
          Mass: {body.mass?.massValue} x 10^{body.mass?.massExponent}
        </Typography>
        <Typography variant="body2">
          Gravity: {body.gravity ?? 'Unknown'} m/s²
        </Typography>
        <Button variant="contained" onClick={() => navigate(`/cuerpo/${body.id}`)} sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default BodyCard;