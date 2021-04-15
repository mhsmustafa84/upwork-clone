import React from 'react'
import FindJobsHeader from '../../../Components/TalentComponents/FindJobsHeader/FindJobsHeader'
import ListOfWork from '../../../Components/TalentComponents/ListOfWork/ListOfWork'
import TypeOfWork from '../../../Components/TalentComponents/TypeOfWork/TypeOfWork'

export default function FindFreelancingJob() {
    return (
        <div>
            <FindJobsHeader />
            <section class="container py-3 px-5 small" id="main-section-ID">
                <div class="row ">
                    <TypeOfWork />
                    <div class="col-xl-9 col-12 px-lg-5 px-1 py-3">
                        <ListOfWork character="A" />
                        <ListOfWork character="B" />
                        <ListOfWork character="C" />
                        <ListOfWork character="D" />
                        <ListOfWork character="E" />
                        <ListOfWork character="F" />
                        <ListOfWork character="G" />
                        <ListOfWork character="H" />
                        <ListOfWork character="I" />
                        <ListOfWork character="J" />
                        <ListOfWork character="K" />
                        <ListOfWork character="L" />
                        <ListOfWork character="M" />
                        <ListOfWork character="N" />
                        <ListOfWork character="O" />
                        <ListOfWork character="P" />
                        <ListOfWork character="Q" />
                        <ListOfWork character="R" />
                        <ListOfWork character="S" />
                        <ListOfWork character="T" />
                        <ListOfWork character="U" />
                        <ListOfWork character="V" />
                        <ListOfWork character="W" />
                        <ListOfWork character="X" />
                        <ListOfWork character="Y" />
                        <ListOfWork character="Z" />
                    </div>
                </div>
            </section>
        </div>
    )
}
