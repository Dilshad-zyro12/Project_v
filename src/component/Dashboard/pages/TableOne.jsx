import { useEffect, useState } from 'react';

const TableOne = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(storedProfiles);
  }, []);

  return (
    <div className="mt-[50px] rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Beneficiary Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Account No
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              IFSC Code
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Payment Method
            </h5>
          </div>
        </div>

        {profiles.map((profile, index) => (
          <div key={index} className="grid grid-cols-3 rounded-sm bg-white dark:bg-boxdark sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <p className="text-sm xsm:text-base">
                {profile.beneficiaryName}
              </p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-sm xsm:text-base">
                {profile.accNo}
              </p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-sm xsm:text-base">
                {profile.ifscCode}
              </p>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <p className="text-sm xsm:text-base">
                {profile.paymentMode}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
