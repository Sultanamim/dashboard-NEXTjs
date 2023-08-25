

export default function ProjectsPage() {
  return (
    <div> 
      <div className="absolute top-[136px] left-[calc(50%_-_619.5px)] rounded-xl bg-secondary-primary-white box-border w-[1525px] overflow-hidden flex flex-col items-center justify-start text-primary-navy font-body-medium border-[1px] border-solid border-lightgray">
        <div className="self-stretch relative h-[98px] overflow-hidden shrink-0">
          <div className="absolute top-[34px] left-[24px] flex flex-row items-start justify-start gap-[5px] text-base font-body-text-medium-bold">
            <b className="relative leading-[30px]">Total:</b>
            <b className="relative leading-[30px]">136</b>
            <b className="relative leading-[30px]">projects</b>
          </div>
          <div className="absolute top-[24px] right-[160px] rounded-11xl bg-secondary-primary-white box-border w-[235px] overflow-hidden flex flex-row py-2.5 pr-5 pl-[25px] items-center justify-center gap-[13px] border-[1px] border-solid border-grey-grey-30">
            <div className="relative leading-[30px] font-medium">
              Sort by: Date Created
            </div>
            <img
              className="relative w-6 h-6"
              alt=""
              src="/vuesaxoutlinearrowdown.svg"
            />
          </div>
          <div className="absolute top-[24px] right-[24px] rounded-11xl bg-secondary-primary-white overflow-hidden flex flex-row py-2.5 pr-5 pl-[25px] items-center justify-center gap-[13px] border-[1px] border-solid border-grey-grey-30">
            <div className="relative leading-[30px] font-medium">Filter</div>
            <img
              className="relative w-6 h-6"
              alt=""
              src="/vuesaxoutlinefilteradd.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-xl overflow-hidden flex flex-col py-0 px-6 items-start justify-start text-base">
          <div className="self-stretch relative h-[60px] overflow-hidden shrink-0 text-grey-grey-70">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <img className="relative w-11 h-11" alt="" src="/icon7.svg" />
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] leading-[30px] font-medium">
                  Name
                </div>
              </div>
              <div className="relative w-[100px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] leading-[30px] font-medium">
                  Area
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px] font-medium">
                  Appointment Date
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px] font-medium">
                  Price
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px] font-medium">
                  Status
                </div>
              </div>
              <div className="relative w-[60px] h-[30px] overflow-hidden shrink-0 text-center">
                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] leading-[30px] font-medium">
                  Edit
                </div>
              </div>
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-20 overflow-hidden shrink-0">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <div className="relative rounded-6xl bg-grey-grey-50 w-11 h-11 overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-grey-grey-30" />
              </div>
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative leading-[30px]">
                    475 Spruce Drive,
                  </div>
                  <div className="relative leading-[30px]">Pittsburgh,</div>
                  <div className="relative leading-[30px]">PA</div>
                  <div className="relative leading-[30px]">23592</div>
                </div>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative leading-[30px]">100</div>
                  <img
                    className="relative w-[18.87px] h-[12.89px]"
                    alt=""
                    src="/m2.svg"
                  />
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                  Nov 14, 2021 07:00 AM
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                  <div className="relative leading-[30px]">$</div>
                  <div className="relative leading-[30px]">6000</div>
                </div>
              </div>
              <div className="rounded-81xl bg-primary-blue-light w-[120px] h-10 flex flex-row py-2.5 px-5 box-border items-center justify-center text-xs text-primary-blue">
                <div className="relative leading-[20px] uppercase font-medium">
                  IN PROGRESS
                </div>
              </div>
              <img
                className="relative rounded-3xs w-[60px] h-[60px] overflow-hidden shrink-0"
                alt=""
                src="/edit-cell.svg"
              />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-20 overflow-hidden shrink-0">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <div className="relative rounded-6xl bg-grey-grey-50 w-11 h-11 overflow-hidden shrink-0">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image@2x.png"
                />
              </div>
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative leading-[30px]">
                    1952 Chicago Avenue,
                  </div>
                  <div className="relative leading-[30px]">Fresno,</div>
                  <div className="relative leading-[30px]">CA</div>
                  <div className="relative leading-[30px]">93711</div>
                </div>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative leading-[30px]">100</div>
                  <img
                    className="relative w-[18.87px] h-[12.89px]"
                    alt=""
                    src="/m21.svg"
                  />
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                  Nov 15, 2021 08:00 AM
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                  <div className="relative leading-[30px]">$</div>
                  <div className="relative leading-[30px]">6000</div>
                </div>
              </div>
              <div className="rounded-81xl bg-primary-blue-light w-[120px] h-10 flex flex-row py-2.5 px-5 box-border items-center justify-center text-xs text-primary-blue">
                <div className="relative leading-[20px] uppercase font-medium">
                  CLOSED
                </div>
              </div>
              <img
                className="relative rounded-3xs w-[60px] h-[60px] overflow-hidden shrink-0"
                alt=""
                src="/edit-cell1.svg"
              />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-20 overflow-hidden shrink-0">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <div className="relative rounded-6xl bg-grey-grey-50 w-11 h-11 overflow-hidden shrink-0">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image1@2x.png"
                />
              </div>
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative leading-[30px]">4409 Haul Road,</div>
                  <div className="relative leading-[30px]">Saint Paul,</div>
                  <div className="relative leading-[30px]">MN</div>
                  <div className="relative leading-[30px]">55102</div>
                </div>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative leading-[30px]">100</div>
                  <img
                    className="relative w-[18.87px] h-[12.89px]"
                    alt=""
                    src="/m22.svg"
                  />
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                  Nov 16, 2021 09:00 AM
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                  <div className="relative leading-[30px]">$</div>
                  <div className="relative leading-[30px]">6000</div>
                </div>
              </div>
              <div className="rounded-81xl bg-primary-blue-light w-[120px] h-10 flex flex-row py-2.5 px-5 box-border items-center justify-center text-xs text-primary-blue">
                <div className="relative leading-[20px] uppercase font-medium">
                  IN PROGRESS
                </div>
              </div>
              <img
                className="relative rounded-3xs w-[60px] h-[60px] overflow-hidden shrink-0"
                alt=""
                src="/edit-cell2.svg"
              />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-20 overflow-hidden shrink-0">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <div className="relative rounded-6xl bg-grey-grey-50 w-11 h-11 overflow-hidden shrink-0">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image2@2x.png"
                />
              </div>
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative leading-[30px]">
                    579 Godfrey Street,
                  </div>
                  <div className="relative leading-[30px]">Monitor,</div>
                  <div className="relative leading-[30px]">OR</div>
                  <div className="relative leading-[30px]">97071</div>
                </div>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative leading-[30px]">100</div>
                  <img
                    className="relative w-[18.87px] h-[12.89px]"
                    alt=""
                    src="/m23.svg"
                  />
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                  Nov 17, 2021 10:00 AM
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                  <div className="relative leading-[30px]">$</div>
                  <div className="relative leading-[30px]">6000</div>
                </div>
              </div>
              <div className="rounded-81xl bg-primary-blue-light w-[120px] h-10 flex flex-row py-2.5 px-5 box-border items-center justify-center text-xs text-primary-blue">
                <div className="relative leading-[20px] uppercase font-medium">
                  CLOSED
                </div>
              </div>
              <img
                className="relative rounded-3xs w-[60px] h-[60px] overflow-hidden shrink-0"
                alt=""
                src="/edit-cell3.svg"
              />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-20 overflow-hidden shrink-0">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <div className="relative rounded-6xl bg-grey-grey-50 w-11 h-11 overflow-hidden shrink-0">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image3@2x.png"
                />
              </div>
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative leading-[30px]">
                    2705 Cantebury Drive,
                  </div>
                  <div className="relative leading-[30px]">New York,</div>
                  <div className="relative leading-[30px]">NY</div>
                  <div className="relative leading-[30px]">10011</div>
                </div>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative leading-[30px]">100</div>
                  <img
                    className="relative w-[18.87px] h-[12.89px]"
                    alt=""
                    src="/m24.svg"
                  />
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                  Nov 20, 2021 07:00 AM
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                  <div className="relative leading-[30px]">$</div>
                  <div className="relative leading-[30px]">6000</div>
                </div>
              </div>
              <div className="rounded-81xl bg-primary-blue-light w-[120px] h-10 flex flex-row py-2.5 px-5 box-border items-center justify-center text-xs text-primary-blue">
                <div className="relative leading-[20px] uppercase font-medium">
                  IN PROGRESS
                </div>
              </div>
              <img
                className="relative rounded-3xs w-[60px] h-[60px] overflow-hidden shrink-0"
                alt=""
                src="/edit-cell4.svg"
              />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-20 overflow-hidden shrink-0">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <div className="relative rounded-6xl bg-grey-grey-50 w-11 h-11 overflow-hidden shrink-0">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image4@2x.png"
                />
              </div>
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative leading-[30px]">
                    579 Godfrey Street,
                  </div>
                  <div className="relative leading-[30px]">Monitor,</div>
                  <div className="relative leading-[30px]">OR</div>
                  <div className="relative leading-[30px]">97071</div>
                </div>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative leading-[30px]">100</div>
                  <img
                    className="relative w-[18.87px] h-[12.89px]"
                    alt=""
                    src="/m25.svg"
                  />
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                  Nov 17, 2021 10:00 AM
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                  <div className="relative leading-[30px]">$</div>
                  <div className="relative leading-[30px]">6000</div>
                </div>
              </div>
              <div className="rounded-81xl bg-primary-blue-light w-[120px] h-10 flex flex-row py-2.5 px-5 box-border items-center justify-center text-xs text-primary-blue">
                <div className="relative leading-[20px] uppercase font-medium">
                  CLOSED
                </div>
              </div>
              <img
                className="relative rounded-3xs w-[60px] h-[60px] overflow-hidden shrink-0"
                alt=""
                src="/edit-cell5.svg"
              />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-20 overflow-hidden shrink-0">
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row py-0 pr-6 pl-3 box-border items-center justify-start gap-[24px]">
              <div className="relative rounded-6xl bg-grey-grey-50 w-11 h-11 overflow-hidden shrink-0">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image5@2x.png"
                />
              </div>
              <div className="flex-1 relative h-[30px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative leading-[30px]">
                    2705 Cantebury Drive,
                  </div>
                  <div className="relative leading-[30px]">New York,</div>
                  <div className="relative leading-[30px]">NY</div>
                  <div className="relative leading-[30px]">10011</div>
                </div>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative leading-[30px]">100</div>
                  <img
                    className="relative w-[18.87px] h-[12.89px]"
                    alt=""
                    src="/m26.svg"
                  />
                </div>
              </div>
              <div className="relative w-[200px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                  Nov 20, 2021 07:00 AM
                </div>
              </div>
              <div className="relative w-[120px] h-[30px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                  <div className="relative leading-[30px]">$</div>
                  <div className="relative leading-[30px]">6000</div>
                </div>
              </div>
              <div className="rounded-81xl bg-primary-blue-light w-[120px] h-10 flex flex-row py-2.5 px-5 box-border items-center justify-center text-xs text-primary-blue">
                <div className="relative leading-[20px] uppercase font-medium">
                  IN PROGRESS
                </div>
              </div>
              <img
                className="relative rounded-3xs w-[60px] h-[60px] overflow-hidden shrink-0"
                alt=""
                src="/edit-cell6.svg"
              />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
          </div>
          <div className="self-stretch relative h-[100px] overflow-hidden shrink-0 text-sm">
            <div className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_64.5px)] rounded-51xl bg-secondary-primary-white box-border w-[130px] overflow-hidden flex flex-row py-2.5 px-6 items-center justify-center border-[1px] border-solid border-grey-grey-30">
              <div className="relative leading-[30px] font-medium">
                Load More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_459.5px)] right-[31px] rounded-51xl bg-primary-blue h-[38px] flex flex-row py-2.5 pr-4 pl-5 box-border items-center justify-center gap-[12px] text-secondary-primary-white font-body-medium">
        <div className="relative leading-[30px] font-medium">
          Add New Project
        </div>
        <img className="relative w-5 h-5" alt="" src="/icon8.svg" />
      </div>
    </div>
  )
}
