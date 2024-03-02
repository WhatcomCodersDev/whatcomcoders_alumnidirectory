import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import StepOnePersonalInfo from './StepOnePersonalInfo';
import StepTwoCareerInfo from './StepTwoCareerInfo';
import StepThreeMeetingInfo from './StepThreeMeetingInfo';
import { Button, Card, CardContent, Container, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import WelcomeBanner from './WelcomeBanner';

const stepOneValidationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  company: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  jobTitle: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});

const stepTwoValidationSchema = Yup.object().shape({
  linkedinUrl: Yup.string().url('Invalid URL'),
  githubUrl: Yup.string().url('Invalid URL'),
  personalWebsiteUrl: Yup.string().url('Invalid URL'),
  description: Yup.string().min(2, 'Too Short!').max(600, 'Too Long!'),
  picture: Yup.string().url('Invalid URL'),
});

const stepThreeValidationSchema = Yup.object().shape({
  calendlyUrl: Yup.string().url('Invalid URL'),
  referral: Yup.boolean(),
  mentoring: Yup.boolean(),
  coffeeChat: Yup.boolean(),
});

const validationSchemas = [
  stepOneValidationSchema,
  stepTwoValidationSchema,
  stepThreeValidationSchema,
];

const initialValues = {
  userName: '',
  email: '',
  company: '',
  jobTitle: '',
  linkedinUrl: '',
  githubUrl: '',
  personalWebsiteUrl: '',
  description: '',
  picture: '',
  calendlyUrl: '',
  referral: false,
  mentoring: false,
  coffeeChat: false,
};

const SignUpFormMultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [, setFormValues] = useState(initialValues);

  const currentValidationSchema = validationSchemas[currentStep];

  const handleSubmit = (values, { setSubmitting }) => {
    setFormValues(values); // Update the formValues state with the latest values
    if (currentStep < validationSchemas.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission here
      console.log('Submitting form:', values);
    }
    setSubmitting(false);
  };

  return (
    <Container maxWidth='sm' style={{ marginTop: '2rem' }}>
      <Card variant='outlined'>
        <CardContent>
          <WelcomeBanner currentFormStep={currentStep} />
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ isSubmitting }) => (
              <Form>
                {currentStep === 0 && <StepOnePersonalInfo />}
                {currentStep === 1 && <StepTwoCareerInfo />}
                {currentStep === 2 && <StepThreeMeetingInfo />}

                <Grid
                  container
                  spacing={2}
                  justifyContent='center'
                  marginTop={2}
                >
                  {currentStep > 0 && (
                    <Grid item>
                      <Button
                        variant='outlined'
                        color='primary'
                        startIcon={<ArrowBackIcon />}
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Back
                      </Button>
                    </Grid>
                  )}
                  <Grid item>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      endIcon={
                        currentStep === validationSchemas.length - 1 ? (
                          <SendIcon />
                        ) : (
                          <ArrowForwardIcon />
                        )
                      }
                      disabled={isSubmitting}
                    >
                      {currentStep === validationSchemas.length - 1
                        ? 'Submit'
                        : 'Next'}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUpFormMultiStep;
