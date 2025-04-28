import { useState, useEffect } from 'react';
import { fetchBodies } from '../services/spaceService';

const useFetchBodies = () => {
  const [bodies, setBodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBodies = async () => {
      try {
        const data = await fetchBodies();
        setBodies(data);
      } catch (error) {
        console.error('Error fetching bodies:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBodies();
  }, []);

  return { bodies, loading, error };
};

export default useFetchBodies;