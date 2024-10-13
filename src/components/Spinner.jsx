import { useState } from 'react';
import { SvgSpinnersPulseRingsMultiple } from './SvgSpinnersPulseRingsMultiple';

const Spinner = (ComponentToWrap) => {
  const WrappedWithSpinner = (props) => {
    const [loading, setLoading] = useState(true);

    const stopLoading = () => {
      setLoading(false);
    };

    const SpinnerContent = () => (
      <div className="flex flex-col justify-center items-center">
        <SvgSpinnersPulseRingsMultiple />
      </div>
    );

    return (
      <ComponentToWrap setLoading={stopLoading} loading={loading} {...props}>
        <SpinnerContent />
      </ComponentToWrap>
    );
  };

  WrappedWithSpinner.displayName = `Spinner(${
    ComponentToWrap.displayName || ComponentToWrap.name || 'Component'
  })`;

  return WrappedWithSpinner;
};

export default Spinner;
