export default function SettingsPage() {
  return (
    <div>
      <div className="absolute top-[160px] left-[708px] rounded-xl bg-secondary-primary-white box-border w-[801px] h-[286px] border-[1px] border-solid border-aliceblue" />
      <div className="absolute top-[179px] left-[737px] text-[24px] leading-[150%] font-medium">
        Connect Email
      </div>
      <div className="absolute top-[215px] left-[737px] leading-[150%] text-gray">
        Manage your contact communication within RapidStart
      </div>
      <div className="absolute h-[3.73%] w-[23.74%] top-[25.54%] right-[37.04%] bottom-[70.74%] left-[39.22%] rounded-lg bg-secondary-primary-white box-border overflow-hidden flex flex-row py-0 pr-0 pl-3.5 items-center justify-start text-xs text-gray-gray-400 border-[1px] border-solid border-darkslategray">
        <div className="overflow-hidden flex flex-col items-start justify-center">
          <div className="relative leading-[150%]">m.stevens@brainova.net</div>
          <div className="overflow-hidden flex flex-row py-0 px-[74px] items-center justify-center">
            <div className="relative w-[0.01px] h-[0.01px]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[245px] left-[737px] leading-[140%] font-medium text-gray-gray-700 inline-block w-[77px]">
        Email
      </div>
      <div className="absolute top-[337px] left-[737px] rounded-8xs bg-mediumslateblue w-[126px] h-9 overflow-hidden text-secondary-primary-white">
        <b className="absolute top-[calc(50%_-_14px)] left-[30px] tracking-[-0.02em] leading-[28px]">
          Sync Emails
        </b>
        <img
          className="absolute h-[44.44%] w-[16.34%] top-[25%] right-[81.28%] bottom-[30.56%] left-[2.38%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div className="absolute top-[337px] left-[876px] rounded-8xs bg-thistle w-[155px] h-9 overflow-hidden text-blue">
        <div className="absolute top-[calc(50%_-_14px)] left-[27px] tracking-[-0.02em] leading-[28px]">
          Connect to Gmail
        </div>
        <img
          className="absolute top-[12px] left-[6px] w-[15px] h-[11px] overflow-hidden"
          alt=""
          src="/logosgooglegmail.svg"
        />
      </div>
      <div className="absolute top-[393px] left-[737px] tracking-[-0.02em] leading-[28px]">
        <span>{`By connecting your email, you agree to RapidStart’s `}</span>
        <b>Privacy Policy</b>
        <span>{` and `}</span>
        <b>Terms of Service</b>
        <span>.</span>
      </div>

      {/* ##########################################  CRM MODALS START  #################################################### */}
   
      </div>
  );
}
