import React from 'react'
import HomeTalent from '../Pages/TalentPages/HomeTalent/HomeTalent'
import JobDetailsTalent from '../Pages/TalentPages/JobDetailsTalent/JobDetailsTalent'
import SavedJobs from '../Pages/TalentPages/SavedJobs/SavedJobs'


export default function Talent() {
    return (
        <div>
            <JobDetailsTalent/>
            <HomeTalent/>
            <SavedJobs/>
        </div>
    )
}
