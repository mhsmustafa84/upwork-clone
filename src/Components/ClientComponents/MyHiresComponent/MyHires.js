import React from 'react'
import EmptyTalent from '../EmptyTalentComponent/EmptyTalent'


export default function MyHires() {
    return (
        <>
        <EmptyTalent heading="You haven't hired anyone yet" link="/ab/profiles/search/" linkContent="Search for freelancers " content="who can help you get work done."/>
        </>
    )
}
