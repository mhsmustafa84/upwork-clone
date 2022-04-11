/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'

export default function JobProposalsNumber({ jobID }) {
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log(jobID);
        db.collection("job")
            .doc(jobID)
            .collection("proposals")
            .get().then(res => {
                setNum(res.docs.length);
            })
    }, [])

    return (
        <span>
            {num}
        </span>
    )
}
