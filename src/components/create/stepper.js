import React from 'react';
import { useHistory } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from "@mui/material/StepButton";

function StepBar(props) {
    const history = useHistory();
    const { step, path, steps } = props;

    // const [activeStep, setActiveStep] = React.useState(0);
    // const [completed, setCompleted] = React.useState({});

    // const totalSteps = () => {
    //     return steps.length;
    // };

    // const completedSteps = () => {
    //     return Object.keys(completed).length;
    // };

    // const isLastStep = () => {
    //     return activeStep === totalSteps() - 1;
    // };

    // const allStepsCompleted = () => {
    //     return completedSteps() === totalSteps();
    // };

    // const handleNext = () => {
    //     const newActiveStep =
    //         isLastStep() && !allStepsCompleted()
    //             ? // It's the last step, but not all steps have been completed,
    //             // find the first step that has been completed
    //             steps.findIndex((step, i) => !(i in completed))
    //             : activeStep + 1;
    //     setActiveStep(newActiveStep);
    // };

    // const handleStep = (step) => () => {
    //     setActiveStep(step);
    // };

    // const handleComplete = () => {
    //     const newCompleted = completed;
    //     newCompleted[activeStep] = true;
    //     setCompleted(newCompleted);
    //     handleNext();
    // };

    const handleStep = (index) => () => {
        if (index > Number(step)) return;
        history.push( `${path}/${index + 1}`);
    }

    return (
        <Stepper nonLinear activeStep={Number(step)} alternativeLabel>
            {steps.map((label, index) => (
                <Step key={label} completed={index < Number(step)}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                        {/* {label} */}
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepBar;