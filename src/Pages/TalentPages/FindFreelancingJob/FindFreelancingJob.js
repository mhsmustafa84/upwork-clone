import React from 'react'
import FindJobsHeader from '../../../Components/TalentComponents/FindJobsHeader/FindJobsHeader'
import TypeOfWork from '../../../Components/TalentComponents/TypeOfWork/TypeOfWork'

export default function FindFreelancingJob() {
    return (
        <div>
            <FindJobsHeader />
            <section class="container py-3 px-5 small" id="main-section-ID">
                <div class="row ">
                    <TypeOfWork />
                </div>
            </section>
        </div>
    )
}
