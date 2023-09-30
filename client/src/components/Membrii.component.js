import React from "react";
export default function Membrii({ members, grid, imgStyle }) {
  const content = `grid ${
    grid === 5
      ? "md:grid-cols-5 grid-cols-2 md:gap-10 md:mx-7"
      : "grid-cols-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-10 md:mx-7"
  }`;
  return (
    <>
      <div className=" md:pb-5 my-10">
        <div className={`${content}`}>
          {members.map((member, index) => (
            <div
              key={index}
              className="m-2 md:m-0 max-w-sm overflow-hidden duration-300 bg-gray-100 hover:shadow-xl hover:shadow-black/40"
            >
              <img
                className={imgStyle}
                src={member.image}
                alt="Poza membru"
                loading="lazy"
                width={100}
                height={100}
              />
              <div className="px-6 py-4">
                <div className="mb-2 flex justify-center">
                  <p className="font-bold text-xl md:text-3xl text-center">
                    {member.nume}
                  </p>
                </div>
                <div className=" flex justify-center">
                  <p className=" md:text-2xl font-semibold text-gray-700 opacity-80 text-center">
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
