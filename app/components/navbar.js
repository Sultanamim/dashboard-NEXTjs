import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faHouse,
 faClipboard,
 faMoneyCheckDollar,
 faWrench
 } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
   return (
    <div className="flex flex-row justify-center text-base font-medium bg-blue-500 text-blue-100 py-5">
       <Link href="/" className="px-6  hover:text-white active:text-white">
       <FontAwesomeIcon icon={faHouse} className="mr-1" />
         Home
      </Link>
       <Link href="/crm/customerrelation" className="px-6  hover:text-white active:text-white">
       <FontAwesomeIcon icon={faClipboard} className="mr-1" />
         CRM Dashboard
         </Link>
       <Link href='/money' className="px-6  hover:text-white active:text-white">
       <FontAwesomeIcon icon={faMoneyCheckDollar} className="mr-1" />
         Money Dashboard
         </Link>
       <Link href='/setting' className="px-6  hover:text-white active:text-white">
       <FontAwesomeIcon icon={faWrench}  className="mr-1" />
         Setting Dashboard
         </Link>
    </div>
   )
}