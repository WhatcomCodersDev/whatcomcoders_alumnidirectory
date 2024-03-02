import React from 'react';
import { Field, useFormikContext } from 'formik';
import { Button, Grid } from '@mui/material';
import { TextField as FormikTextField } from 'formik-mui';

const StepTwoCareerInfo = () => {
  const { setFieldValue } = useFormikContext();

  // useFormikContext hook is used to access Formik's state and helper methods if needed

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='linkedinUrl'
          label='LinkedIn URL'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='githubUrl'
          label='GitHub URL'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='personalWebsiteUrl'
          label='Personal Website URL'
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={FormikTextField}
          name='description'
          label='Short Bio'
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        {/* For file upload, you might need a custom component or handle it differently */}
        <input
          accept='image/*'
          style={{ display: 'none' }}
          id='raised-button-file'
          multiple
          type='file'
          onChange={(event) => {
            // Assuming you want to store the first selected file
            const file = event.currentTarget.files[0];
            setFieldValue('picture', file);
          }}
        />
        <Button variant='contained' component='span'>
          Upload Picture
        </Button>
      </Grid>
    </Grid>
  );
};

export default StepTwoCareerInfo;
