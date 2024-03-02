import React from 'react';
import { Field } from 'formik';
import { TextField as FormikTextField } from 'formik-mui';
import Grid from '@mui/material/Grid';

const StepOnePersonalInfo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='name'
          type='text'
          label='Name'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='email'
          type='email'
          label='Email'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='company'
          type='text'
          label='Company'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='jobTitle'
          type='text'
          label='Job Title'
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default StepOnePersonalInfo;
