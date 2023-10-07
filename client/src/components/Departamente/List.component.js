import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import DepartamentItem from "./Item.component";
import Banner from "../Banner.component";

export default function DepartamenteList({ itemArray }) {
  const [selectedTab, setSelectedTab] = useState(itemArray[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileMediaQuery.matches);

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mobileMediaQuery.addListener(handleResize);
    return () => {
      mobileMediaQuery.removeListener(handleResize);
    };
  }, []);

  const styleButton = isMobile
    ? " text-black bg-blue-600 w-fit rounded-lg "
    : "mt-7 text-black bg-blue-600 w-fit rounded-lg position-absolute z-10";

  console.log(selectedTab);
  return (
    <>
      <div className="md:pt-0  pb-32 pt-20 md:mx-52 mx-2">
        <div>
          <div className="flex justify-end mr-5">
            <DropdownButton
              id="dropdown-basic-button"
              title={"Departament " + selectedTab.label}
              variant="primary"
              size="lg"
              className={styleButton}
            >
              {itemArray.map((item, index) => (
                <Dropdown.Item
                  key={index}
                  className=" cursor-pointer bg"
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.label}`}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Banner
                  firstTitle={"Departamentul"}
                  secondTitle={selectedTab.label}
                  video={selectedTab.video}
                  LseBanner={selectedTab.banner}
                />
                <div className="   h-auto">
                  <div className=" h-auto">
                    <DepartamentItem selectedTab={selectedTab} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
