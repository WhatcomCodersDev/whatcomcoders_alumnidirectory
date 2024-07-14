import { BOOTSTRAP_API_URL } from './constants';

// The blocking = there is a loading screen
export const fetchAllBootstrapServices = async (
  setLoading,
  setBootstrapServices
) => {
  setLoading(true);

  try {
    console.log('BOOTSTRAP_API_URL:', BOOTSTRAP_API_URL);
    const response = await fetch(`${BOOTSTRAP_API_URL}/bootstrap-table/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('data:', data);
    setBootstrapServices(data);
  } catch (error) {
    console.error('Request failed:', error.message);
  } finally {
    setLoading(false);
  }
};
