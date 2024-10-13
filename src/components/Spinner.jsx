import { useState } from "react";
import { SvgSpinnersPulseRingsMultiple } from "./SvgSpinnersPulseRingsMultiple";

const Spinner = (ComponentToWrap) => {
  const WrappedWithSpinner = (props) => {
    const [loading, setLoading] = useState(true);

    const stopLoading = () => {
        console.log("loading to false");
        setLoading(false)
      };

    if (loading) {
      return (
        <div className="flex flex-col justify-center items-center">
            <SvgSpinnersPulseRingsMultiple />
        </div>
      );
    }

    return <ComponentToWrap setLoading={stopLoading} {...props} />;
  };

  WrappedWithSpinner.displayName = `Spinner(${
    ComponentToWrap.displayName || ComponentToWrap.name || "Component"
  })`;

  return WrappedWithSpinner;
};

export default Spinner;
