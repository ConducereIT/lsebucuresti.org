import React, { useState } from "react";
import Carousel from "./Carousel.component";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function DepartamenteList({ itemArray }) {
  const [selectedTab, setSelectedTab] = useState(itemArray[0]);

  return (
    <>
      <div className="md:pt-20 md:pb-32 pb-10 pt-10 md:mx-52 mx-2">
        <div>
          <div className=" bg-slate-100">
            <DropdownButton
              id="dropdown-basic-button"
              title={"Departament " + selectedTab.label}
              variant="primary"
              size="lg"
              className=" bg-blue-600 w-fit rounded-lg"
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
                <div className=" bg-slate-100 pt-10">
                  <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <div className="pb-32">
                        <h1 className="uppercase text-2xl md:text-4xl font-bold p-3 mb-2">
                          {selectedTab.title}
                        </h1>
                        <hr className=" border-4 border-blue-600 opacity-90" />
                        <p className=" md:text-xl p-2 text-left opacity-90">
                          {selectedTab.text}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <Carousel slides={selectedTab.images} />
                    </div>
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
