import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { DiMongodb, DiAndroid } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";

function Body() {
  return (
    <div className="pt-1 grid grid-rows-3 grid-flow-col gap-4 shadow-xl ">
      <div className="bg-white row-start-2 row-span-2 rounded-2xl  shadow-xl ">
        <div className="text-center h-50 bg-teal-400 rounded-2xl">
          <img
            className="inline object-cover w-20 h-20 mr-2 rounded-full border"
            src="data:image/png;base64,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"
            alt="imag"
          />
          <span className="pl-10 font-bold">Balram Yadav</span>
        </div>
        <div className=" h-40 border-cyan-500 rounded-3xl text-center inline-blcok align-middle pt-6">
          <p>Graduation: BCA 2021</p>
          <p>Post Graduation: MCA 2023</p>
        </div>
      </div>
      <div className="  shadow-xl bg-white rounded-2xl row-end-3 row-span-2 ">
        <div className="bg-violet-500 rounded-2xl text-center">
          <span className="font-bold">Technical Skill</span>
        </div>
        <div className="pl-6 pt-6 grid grid-rows-4">
          <div className="flex">
            <DiMongodb className="" color="green" size={25} />
            <span className="font-semibold pl-6">
              <p>MongoDB</p>
            </span>
          </div>
          <div className="flex">
            <SiExpress className="" color="grey" size={25} />
            <span className="font-semibold pl-6">
              <p>ExpressJs</p>
            </span>
          </div>
          <div className="flex pb-2">
            <FaReact className="animate-spining" color="#db2777" size={25} />
            <span className="font-semibold pl-6">
              <p>ReactJs</p>
            </span>
          </div>
          <div className="flex">
            <FaNodeJs className="" color="green" size={25} />
            <span className="font-semibold pl-6">
              <p>NodeJs</p>
            </span>
          </div>
          <div className="flex">
            <FaPython className="animate-pulse" color="#404040" size={25} />
            <span className="font-semibold pl-6">
              <p>Python</p>
            </span>
          </div>
          <div className="flex">
            <GrMysql color="#164e63" size={25} />
            <span className="font-semibold pl-6">
              <p>MySql</p>
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" bg-white row-start-1 row-end-4 rounded-2xl  shadow-xl">
        <div className="font-bold text-center bg-pink-600 rounded-full">
          Projects
        </div>
        <div className="grid grid-row-3">
          <div className="my-2 mx-2">
          <div className="flex">
              <CgWebsite size={24} />
              <span className="font-semibold pl-04">DevConnect</span>
            </div>
            <div className="mx-3">
              <ul className="list-outside list-disc">
                <li>Technology: MERN</li>
              </ul>
            </div>
          </div>
          <div className="my-2 mx-2">
            <div className="flex">
              <CgWebsite  size={24} />
              <span className="font-semibold pl-04">Watch-Estore</span>
            </div>
            <div className="mx-3">
              <ul className="list-outside list-disc">
                <li>Frontend: EJS</li>
                <li>Backend: NodeJS and MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="my-2 mx-2">
          <div className="flex">
              <DiAndroid className="" color="#22c55e" size={24} />
              <span className="font-semibold pl-04">Meal App</span>
            </div>
            <div className="mx-3">
              <ul className="list-outside list-disc">
                <li>Technology: React Native </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
