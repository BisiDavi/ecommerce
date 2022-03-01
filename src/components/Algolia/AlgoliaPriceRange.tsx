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
      <div className="widget my-2 pb-4  border-b-2">
        <h3 className="mb-8 text-xl font-medium">Price</h3>
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
          <div className="flex w-full pb-1 items-center justify-between">
            <div className="w-1/4">
              <div className="flex">
                <span className="mr-2 font-bold">$ </span>
                <input
                  className="w-full text-center border-2 border-gray-300 rounded-lg"
                  type="text"
                  value={priceMin}
                />
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex">
                <span className="input-group-text">$</span>
                <input
                  className="w-full text-center border-2 border-gray-300 rounded-lg"
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
