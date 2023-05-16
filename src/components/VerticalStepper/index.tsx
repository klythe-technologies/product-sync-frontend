import React from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper
} from '@mui/material';
import { useRouter } from 'next/router';

const steps = [
  {
    label: 'Countries',
    description: 'India'
  },
  {
    label: 'Delivery times',
  },
  {
    label: 'Shipping costs',
  },
];

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCancel = () => {
    router.push('/products/shipping')
  };


  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ color: '#1a73e8' }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, textTransform: 'none', backgroundColor: '#1a73e8' }}
                  >
                    {index === steps.length - 1 ? 'Save' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ textTransform: 'none', color: '#1a73e8' }}
                  >
                    Back
                  </Button>
                  <Button
                    sx={{ textTransform: 'none', color: '#1a73e8' }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default VerticalStepper;