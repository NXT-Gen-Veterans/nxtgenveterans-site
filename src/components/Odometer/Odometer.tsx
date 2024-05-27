// OdometerComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

interface OdometerComponentProps {
  value: number;
}

const OdometerComponent: React.FC<OdometerComponentProps> = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            {
                threshold: 0.5,
            }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }

        const refCurrent = ref.current ? ref.current : null;

        return () => {
            if (refCurrent) {
                observer.unobserve(refCurrent);
            }
        }
    }, [])

    useEffect(() => {
        if (inView) {
            setDisplayValue(value);
        }
    }, [inView, value])

    return (
        <div ref={ref} className="large-text [line-height:1] text-ngv-blue select-none">
        <Odometer value={displayValue} format="d" duration={2400} />
        <span className="">+ hrs</span>
        </div>
    );
};

export default OdometerComponent;
