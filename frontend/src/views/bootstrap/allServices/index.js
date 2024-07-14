import React, { useState, useEffect } from 'react';
import { fetchAllBootstrapServices } from 'services/bootstrap/apiFetchAllBootstrapServices';
import AllBootstrapServicesTable from './AllBootstrapServicesTable';

const AllBootstrapServicesView = () => {
  const [loading, setLoading] = useState(true);
  const [bootstrapServices, setBootstrapServices] = useState([]);

  useEffect(() => {
    fetchAllBootstrapServices(setLoading, setBootstrapServices);
  }, []);

  return (
    <div>
      <AllBootstrapServicesTable bootstrapServices={bootstrapServices} />
    </div>
  );
};

export default AllBootstrapServicesView;
