/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import OneContract from "../../../Components/TalentComponents/OneContract/OneContract";
import SearchContract from "../../../Components/TalentComponents/SearchContract/SearchContract";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../../firebase";
import Loader from './../../../Components/SharedComponents/Loader/Loader';

export default function AllContracts() {

  const { t } = useTranslation();
  const [contracts, setContracts] = useState([]);
  const [data, setData] = useState(false);

  useEffect(async () => {
    db.collection("talent")
      .doc(auth.currentUser.uid)
      .collection("jobProposal")
      .where("status", "==", "contract")
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
      <div className=" bg-gray">
        <div className="container">
          <div className="row">
            <h4 className="col-12 mt-5">{t("Contracts")}</h4>
            <div className="card mt-4 mb-5">
              <div className="card-header bg-white p-3">
                <SearchContract />
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
                        <p className="h3">No contracts yet.</p>
                      :
                      <Loader />
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
