import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@mui/material';

const AllBootstrapServicesTable = ({ bootstrapServices }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Repository</TableCell>
            <TableCell>Logs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bootstrapServices.map((service) => (
            <TableRow key={service.service_name}>
              <TableCell>{service.service_name}</TableCell>
              <TableCell>{service.owner}</TableCell>
              <TableCell>
                <Link href={service.repo} target='_blank' rel='noopener'>
                  {service.repo}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={service.logs} target='_blank' rel='noopener'>
                  Logs
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllBootstrapServicesTable;
