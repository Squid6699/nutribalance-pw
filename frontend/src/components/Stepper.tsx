import { useEffect, useState } from 'react';
import "../css/stepper.css";

const steps = ['Paso 1: Información básica', 'Paso 2: Detalles adicionales', 'Paso 3: Personalización'];

function Stepper({ step }: { step: number }) {
    const [activeStep, setActiveStep] = useState(step);

    useEffect(() => {
        setActiveStep(step);
    }, [step]);


    return (
        <div className="stepper-container">
            <div className="stepper">
                {steps.map((step, index) => (
                    <div key={index} className={`step ${index <= activeStep ? 'active' : ''}`}>
                        <div className="step-circle">{index + 1}</div>
                        <div className="step-label">{step}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
