import React from 'react';
import { Field } from 'formik';
import { Grid } from '@mui/material';
import { TextField as FormikTextField } from 'formik-mui';
import { CheckboxWithLabel } from 'formik-mui';

const StepThreeMeetingInfo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='calendlyUrl'
          type='url'
          label='Calendly URL'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={CheckboxWithLabel}
          type='checkbox'
          name='referral'
          Label={{ label: 'Open to Referrals' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={CheckboxWithLabel}
          type='checkbox'
          name='mentoring'
          Label={{ label: 'Interested in Mentoring' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={CheckboxWithLabel}
          type='checkbox'
          name='coffeeChat'
          Label={{ label: 'Open to Coffee Chats' }}
        />
      </Grid>
    </Grid>
  );
};

export default StepThreeMeetingInfo;
