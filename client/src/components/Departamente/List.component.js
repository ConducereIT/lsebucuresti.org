import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import DepartamentItem from "./Item.component";

export default function DepartamenteList({ itemArray }) {
  const [selectedTab, setSelectedTab] = useState(itemArray[0]);

  return (
    <>
      <div className="md:pt-5 md:pb-32 pb-10 pt-10 md:mx-52 mx-2">
        <div>
          <div className=" bg-slate-100 flex justify-end ">
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
                <div className=" bg-slate-100 pt-0 h-auto">
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
