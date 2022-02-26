import { useState } from "react";

interface TabProps {
  color: string;
  tabTitles: string[];
  tabContent1: JSX.Element;
  tabContent2: JSX.Element;
  tabContent3?: JSX.Element;
  icon1: JSX.Element;
  icon2: JSX.Element;
  icon3?: JSX.Element;
  numberOfTabs: number;
}

export default function Tabs({
  color,
  tabTitles,
  icon1,
  icon2,
  icon3,
  tabContent1,
  tabContent2,
  tabContent3,
  numberOfTabs,
}: TabProps) {
  const [openTab, setOpenTab] = useState(0);
  const tabContentArray = new Array(numberOfTabs).fill(0);

  function tabHandler(e, index) {
    e.preventDefault();
    setOpenTab(index);
  }

  function displayTab() {
    switch (openTab) {
      case 0:
        return tabContent1;
      case 1:
        return tabContent2;
      case 2:
        return tabContent3;
      default:
        return null;
    }
  }

  function displayIcons() {
    switch (openTab) {
      case 0:
        return icon1;
      case 1:
        return icon2;
      case 2:
        return icon3;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabTitles.map((tabTitle, index) => (
              <li
                key={index}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => tabHandler(e, index)}
                  data-toggle="tab"
                  href={`#link${index}`}
                  role="tablist"
                >
                  {displayIcons} {tabTitle}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {tabContentArray.map((_, index) => (
                  <div
                    className={openTab === index ? "block" : "hidden"}
                    id={`link${index}`}
                  >
                    {displayTab()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
