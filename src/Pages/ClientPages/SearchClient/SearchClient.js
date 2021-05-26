
import React, { useContext } from 'react'
import { SearchContext } from '../../../Context/SearchContext';
import searchSvg from '../../../assets/svg/search.svg'
import SearchBarJobsClient from "../../../Components/ClientComponents/SearchBarJobsClient/SearchBarJobsClient";
import TalentCardSearch from "../../../Components/ClientComponents/TalentCardSearch/TalentCardSearch";
export default function SearchClient(props) {
  const { talentArr , talentSearchList } = useContext(SearchContext)
    return (
        <div className="container-md container-fluid-sm my-lg-4">
            <div className="row">
                
                <div className="col-xs-12"> 

                    <div>

                        <div className="list-group-item py-lg-4">
                            <SearchBarJobsClient />
                        </div>
                    </div>
                    <div >
                        <div  className="mx-3" >
                        {talentArr?.length >= 0 || talentSearchList == "" ? 
                        <TalentCardSearch/> : <div className='col-12 bg-white'>

                        <h3 className="fw-bold text-center py-2 pt-5 " style={{color: '#124C82'}}>There are no results that match your search</h3>
                    
                        <h6 className="text-center " style={{color: '#124C82'}}>Please try adjusting your search keywords or filters</h6>
                    
                        <img className='mx-auto d-block' src={searchSvg} /> 
                    
                    </div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}