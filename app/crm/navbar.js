"use client";
import Link from "next/link";
import { useState } from "react";

export default function CrmNavbar() {
    const[active, setActive] = useState(false);

    const handleActive = (e) => {
      setActive(!active);
    }
    return (
        <div className="absolute top-[16px] left-[0px] rounded-[22px] w-[290px] h-[1008px] overflow-hidden flex flex-col items-start justify-start text-base text-secondary-grey-600">
        <div className="relative bg-blackampwhite-white w-[290px] h-[1024px] overflow-hidden shrink-0">
          <div className="absolute top-[114.5px] left-[-0.5px] box-border w-[291px] h-px border-t-[1px] border-solid border-secondary-grey-300" />
          <div className="absolute top-[139px] left-[38px] flex flex-col items-start justify-start gap-[15px]">
            {/* Navs Start */}
            <div className={active? "active relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0 active:bg-mediumslateblue active:text-white" : "relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0"} onClick={handleActive}>
            <Link href="/crm/contacts">
              <div className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px] font-medium">
                  Contacts
              </div>
              <img
                className="absolute top-[calc(50%_-_12.5px)] left-[10px] w-6 h-6 overflow-hidden active:fill-white"
                alt=""
                src="/icon.svg"
              />
               </Link>
            </div>
            <div className={active? "active relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0 active:bg-mediumslateblue active:text-white" : "relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0"} onClick={handleActive}>
             <Link href="/crm/leadcapture">
              <div className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px] font-medium">
                Lead Capture
              </div>
              <img
                className="absolute top-[calc(50%_-_12.5px)] left-[10px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icon1.svg"
              />
              </Link>
            </div>
            <div className={active? "active relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0 active:bg-mediumslateblue active:text-white" : "relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0"} onClick={handleActive}>
                <Link href="/crm/calender">
              <div className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px] font-medium">
                Calender
              </div>
              <img
                className="absolute top-[calc(50%_-_12.5px)] left-[10px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icon2.svg"
              />
              </Link>
            </div>
            <div className={active? "active relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0 active:bg-mediumslateblue active:text-white" : "relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0"} onClick={handleActive} >
                <Link href="/crm/projects">
              <div className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px] font-medium">
                Projects
              </div>
              <img
                className="absolute top-[calc(50%_-_12.5px)] left-[10px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icon3.svg"
              />
              </Link>
            </div>
            <div className={active? "active relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0 bg-mediumslateblue text-white" : "relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0"} onClick={handleActive}>
                <Link href="/crm/resources">
              <div className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px] font-medium">
                Resources
              </div>
              <img
                className="absolute top-[10px] left-[10px] w-6 h-6 overflow-hidden"
                alt=""
                src="/school.svg"
              />
              </Link>
            </div>
            <div className={active? "active relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0 active:bg-mediumslateblue active:text-white" : "relative rounded-8xs w-[214px] h-[45px] overflow-hidden shrink-0 active:bg-mediumslateblue active:text-white"} onClick={(e) =>handleActive(e)}>
                <Link href="/crm/settings">
              <div className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px] font-medium">
                Settings
              </div>
              <img
                className="absolute top-[calc(50%_-_12.5px)] left-[10px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icon4.svg"
              />
              </Link>
            </div>
          </div>
        <div className={active?"active absolute top-[929px] left-[14px] rounded-8xs w-[263px] h-[45px] overflow-hidden active:bg-mediumslateblue active:text-white" :"absolute top-[929px] left-[14px] rounded-8xs w-[263px] h-[45px] overflow-hidden"} onClick={handleActive}>
            <Link href="/crm">
            <div className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px] font-medium">
              Log Out
            </div>
            <img
              className="absolute top-[calc(50%_-_12.5px)] left-[10px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon5.svg"
            />
            </Link>
          </div>
            {/* Navs End */}

          <div className="absolute top-[50px] left-[38px] rounded-8xs bg-mediumslateblue w-[214px] h-[45px] overflow-hidden text-blackampwhite-white">
          <Link href="/crm/customerrelation">
            <b className="absolute top-[calc(50%_-_13.5px)] left-[48px] tracking-[-0.02em] leading-[28px]">
              Customer Relations
            </b>
            <img
              className="absolute top-[calc(50%_-_12.5px)] left-[12px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon6.svg"
            />
            </Link>
          </div>
          <img
            className="absolute top-[63px] left-[14px] w-[11.78px] h-5"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    )
}