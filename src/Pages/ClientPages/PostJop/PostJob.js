import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import PostJobAside from '../../../components/client/PostJobAside/PostJobAside'
import PostJobTitle from './../../../components/client/PostJobTitle/PostJobTitle';
import PostJobDescription from './../../../components/client/PostJobDescription/PostJobDescription';
import PostJobDetails from './../../../components/client/PostJobDetails/PostJobDetails';
import PostJobExpertise from './../../../components/client/PostJobExpertise/PostJobExpertise';
import PostJobVisibility from '../../../components/client/PostJobVisibility/PostJobVisibility';
import PostJobBudget from './../../../components/client/PostJobBudget/PostJobBudget';
import PostJobReview from './../../../components/client/PostJobReview/PostJobReview';
import PostJobGetStarted from './../../../components/client/PostJobGetStarted/PostJobGetStarted';

export default function PostJob() {

    let [start, setStart] = useState(false);

    const isStart = () => {
        start = true;
        setStart(start);
    }

    const [btns, setBtns] = useState({
        title: true,
        description: true,
        details: true,
        expertise: true,
        visibility: true,
        budget: true,
        review: true
    })

    return (
        <section className="sec-bg-cn p-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <PostJobAside btns={btns} />
                    </div>
                    <div className="col-lg-9">
                        <Routes>
                            <Route path="/post-job">
                                <PostJobGetStarted start={start} isStart={isStart} setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/title">
                                <PostJobTitle setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/description">
                                <PostJobDescription setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/details">
                                <PostJobDetails setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/expertise">
                                <PostJobExpertise setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/visibility">
                                <PostJobVisibility setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/budget">
                                <PostJobBudget setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/review">
                                <PostJobReview />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    )
}
