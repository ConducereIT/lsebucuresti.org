import React from "react";
export default function Membrii({ title, members, grid }) {
  const content = `grid lg:grid-cols-${grid} md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-10`;
  return (
    <>
      <div className="m-auto mx-2 md:pb-5 py-10">
        <div className="flex justify-center">
          <h1 className=" md:text-5xl text-3xl font-semibold pt-5 pb-5  text-center">
            {title}
          </h1>
        </div>
        <div className={content}>
          {members.map((member, index) => (
            <div
              key={index}
              className=" m-2 max-w-sm rounded overflow-hidden duration-300 bg-gray-100 hover:shadow-xl"
            >
              <img
                className="w-full"
                src={member.image}
                alt="Poza membru"
                width={100}
                height={100}
              />
              <div className="px-6 py-4">
                <div className="mb-2 flex justify-center ">
                  <p className="font-bold text-2xl md:text-3xl text-center">
                    {member.nume}
                  </p>
                </div>
                <div className=" flex justify-center">
                  <p className=" md:text-2xl font-bold text-gray-500 opacity-80 text-center">
                    {member.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
