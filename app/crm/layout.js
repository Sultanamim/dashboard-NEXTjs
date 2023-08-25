import CrmNavbar from "./navbar";

export default function CrmDashboard({children}) {
  return (
    <div className="">
         <div className="relative bg-secondary-grey-300 w-full h-[1073px] overflow-hidden text-left text-sm text-gray font-body-text-medium-bold">
        <div className="absolute top-[67px] left-[1062px] w-[341px] h-[46px] hidden text-xs text-secondary-dark-grey-500-placeholder-color">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-blackampwhite-white" />
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[42px] w-[37px] h-5">
            <div className="absolute top-[calc(50%_-_10px)] left-[0px] tracking-[-0.02em] leading-[20px]">
              Search
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_-_6px)] left-[20px] w-[11px] h-[11px]"
            alt=""
            src="/search-icon.svg"
          />
        </div>
        <b className="absolute top-[71px] left-[320px] text-[34px] tracking-[-0.02em] leading-[42px] text-secondary-grey-900">
          Welcome back, Andrew
        </b>
        {/* Navbar Content Start */}
        <CrmNavbar />
        {/* Navbar Content End */}
        <main>
          {children}
        </main>
      </div>
</div>
  );
}
