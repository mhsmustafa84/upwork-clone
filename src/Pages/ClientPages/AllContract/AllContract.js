// import React from "react";
// import SearchJobPosts from "./../../../Components/ClientComponents/SearchJobPosts/SearchJobPosts";
// import JobPostsFilters from "./../../../Components/ClientComponents/JobPostsFilters/JobPostsFilters";
// import AllContractsBottomSection from "./../../../Components/ClientComponents/AllContractsBottomSection/AllContractsBottomSection";
// import SortingAllContracts from "./../../../Components/ClientComponents/SortingAllContracts/SortingAllContracts";
// import { useTranslation } from "react-i18next";

// export default function AllContract() {
//   const { t } = useTranslation();
//   return (
//     <div className="bg-light py-3">
//       <div className="container ">
//         <h3 className="mt-5 mb-2 py-3">{t("Contracts")}</h3>
//         <div className="row border border-1 py-4  bg-white">
//           <SearchJobPosts />
//         </div>
//         <div
//           className="row border border-1 py-4  bg-light collapse"
//           id="collapseExample"
//         >
//           <JobPostsFilters />
//         </div>
//         <div className="row border border-1 pt-3  bg-white">
//           <SortingAllContracts />
//         </div>
//         <div className="row border border-1 py-4  bg-white">
//           <AllContractsBottomSection />
//         </div>
//       </div>
//     </div>
//   );
// }


/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchContract from "../../../Components/TalentComponents/SearchContract/SearchContract";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../../firebase";
import OneContract from './OneContract';
import Loader from './../../../Components/SharedComponents/Loader/Loader';

export default function AllContracts() {

  const { t } = useTranslation();
  const [contracts, setContracts] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    db.collection("client")
      .doc(auth.currentUser.uid)
      .collection("contracts")
      .where("talentResponse", "==", "accept")
      .onSnapshot(res => {
        const arr = [];
        res.docs.map(contract => {
          if (contract.exists) {
            arr.push(contract.data());
          }
        });
        arr.length > 0 && setData(true)
        setContracts([...arr]);
      });
  }, []);

  return (
    <>
      <div className="bg-gray">
        <div className="container">
          <div className="row px-5">
            <h4 className="col-12 mt-5">{t("Contracts")}</h4>
            <div className="card mt-4 mb-5">
              <div className="card-header bg-white p-3">
                {data && <SearchContract />}
              </div>
              <div className="card-body row">
                <div className="col-12 card-list">
                  {
                    data
                      ?
                      contracts[0]?.jobId
                        ?
                        contracts.map((contract, index) => {
                          return <OneContract contract={contract} key={index} ind={index} />
                        })
                        :
                        <Loader />
                      :
                      <p className="h3">
                        You haven't started any contracts yet.
                      </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
