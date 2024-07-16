import { LuEye } from "react-icons/lu";
import { IoIosArrowRoundUp } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUsers2 } from "react-icons/lu";
function Card() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 2xl:gap-7">
          <div className="lg:w-[250px] bg-white rounded-sm border-stroke py-6 px-7 shadow-default dark:border-stroke dark:bg-boxdark border-[#e2e8fo]">
            <div className="bg-gray-100 h-11 w-11 rounded-full flex justify-center items-center">
              <LuEye className="w-[22px] h-[16px] text-primary" />
            </div>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h4 className="text-2xl font-bold text-black dark:text-white">
                  $3.456k
                </h4>
                <span className="text-sm font-medium text-[#64748B] ">
                  Total Views
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-[#10B981]">
                0.43%
                <IoIosArrowRoundUp className="h-[11px] w-[11px]" />
              </span>
            </div>
          </div>
          <div className="lg:w-[250px] bg-white rounded-sm border-stroke py-6 px-7 shadow-default dark:border-stroke dark:bg-boxdark border-[#e2e8fo]">
            <div className="bg-gray-100 h-11 w-11 rounded-full flex justify-center items-center">
              <TfiShoppingCart className="w-[22px] h-[16px] text-primary" />
            </div>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h4 className="text-2xl font-bold text-black dark:text-white">
                  $3.456k
                </h4>
                <span className="text-sm font-medium text-[#64748B] ">
                  Total Views
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-[#10B981]">
                0.43%
                <IoIosArrowRoundUp className="h-[11px] w-[11px]" />
              </span>
            </div>
          </div>
          <div className="lg:w-[250px] bg-white rounded-sm border-stroke py-6 px-7 shadow-default dark:border-stroke dark:bg-boxdark border-[#e2e8fo]">
            <div className="bg-gray-100 h-11 w-11 rounded-full flex justify-center items-center">
              <HiOutlineShoppingBag className="w-[22px] h-[16px] text-primary" />
            </div>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h4 className="text-2xl font-bold text-black dark:text-white">
                  $3.456k
                </h4>
                <span className="text-sm font-medium text-[#64748B] ">
                  Total Views
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-[#10B981]">
                0.43%
                <IoIosArrowRoundUp className="h-[11px] w-[11px]" />
              </span>
            </div>
          </div>
          <div className="lg:w-[250px] bg-white rounded-sm border-stroke py-6 px-7 shadow-default dark:border-stroke dark:bg-boxdark border-[#e2e8fo]">
            <div className="bg-gray-100 h-11 w-11 rounded-full flex justify-center items-center">
              <LuUsers2 className="w-[22px] h-[16px] text-primary" />
            </div>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h4 className="text-2xl font-bold text-black dark:text-white">
                  $3.456k
                </h4>
                <span className="text-sm font-medium text-[#64748B] ">
                  Total Views
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-[#10B981]">
                0.43%
                <IoIosArrowRoundUp className="h-[11px] w-[11px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
