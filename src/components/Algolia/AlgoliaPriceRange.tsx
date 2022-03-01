/* eslint-disable react-hooks/exhaustive-deps */
import { connectRange } from "react-instantsearch-dom";
import { useEffect, useState } from "react";
import Nouislider from "nouislider-react";

import "nouislider/distribute/nouislider.css";

export default function RangeSlider({
  min,
  max,
  currentRefinement,
  canRefine,
  refine,
}: any) {
  const [priceMin, setPriceMin] = useState(min);
  const [priceMax, setPriceMax] = useState(max);

  useEffect(() => {
    if (canRefine) {
      setPriceMin(currentRefinement.min);
      setPriceMax(currentRefinement.max);
    }
  }, [currentRefinement.min, currentRefinement.max]);

  if (min === max) {
    return null;
  }

  const onChange = ([min, max]: any) => {
    if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine({ min, max });
    }
  };

  const priceSlider = (
    render: any,
    handle: any,
    value: any[],
    un: any,
    percent: any
  ) => {
    setPriceMin(value[0].toFixed(0));
    setPriceMax(value[1].toFixed(0));
  };

  return (
    <>
      <div className="widget mb-4 pb-4 border-b-4">
        <h3 className="widget-title">Price</h3>
        <Nouislider
          step={10}
          range={{
            min: min,
            max: max,
          }}
          start={[min, max]}
          className="cz-range-slider-ui"
          pips={{ mode: "count", values: 5 }}
          connect
          onChange={onChange}
          onUpdate={priceSlider}
          tooltips={true}
        />
        <div className="flex">
          <div className="flex pb-1">
            <div className="w-50 pe-2 me-2">
              <div className="input-group input-group-sm">
                <span className="input-group-text">$ </span>
                <input
                  className="form-control range-slider-value-min"
                  type="text"
                  value={priceMin}
                />
              </div>
            </div>
            <div className="w-50 ps-2">
              <div className="input-group input-group-sm">
                <span className="input-group-text">$</span>
                <input
                  className="form-control range-slider-value-max"
                  type="text"
                  value={priceMax}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const CustomRangeSlider = connectRange(RangeSlider);
