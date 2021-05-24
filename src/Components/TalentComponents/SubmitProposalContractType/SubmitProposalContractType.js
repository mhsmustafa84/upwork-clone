/* eslint-disable */
import React, { useEffect } from "react";
import { Link, Switch } from "react-router-dom";
import SubmitProposalFixed from "../SubmitProposalFixed/SubmitProposalFixed";
import SubmitProposalHourly from "../SubmitProposalHourly/SubmitProposalHourly";



export default function SubmitProposalContractType({ContractType}) {
 //console.log(ContractType);

    return (
        // {item?.jobPaymentType}
        <section>
            {(ContractType == "Fixed Price" &&  <SubmitProposalFixed/>) || (ContractType == "Hourly" && <SubmitProposalHourly/>)}
            </section>
    );
}
