import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import PostJobAside from '../../../Components/ClientComponents/PostJobAside/PostJobAside'
import PostJobTitle from './../../../Components/ClientComponents/PostJobTitle/PostJobTitle';
import PostJobDescription from './../../../Components/ClientComponents/PostJobDescription/PostJobDescription';
import PostJobDetails from './../../../Components/ClientComponents/PostJobDetails/PostJobDetails';
import PostJobExpertise from './../../../Components/ClientComponents/PostJobExpertise/PostJobExpertise';
import PostJobVisibility from '../../../Components/ClientComponents/PostJobVisibility/PostJobVisibility';
import PostJobBudget from './../../../Components/ClientComponents/PostJobBudget/PostJobBudget';
import PostJobReview from './../../../Components/ClientComponents/PostJobReview/PostJobReview';
import PostJobGetStarted from './../../../Components/ClientComponents/PostJobGetStarted/PostJobGetStarted';

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
                        <Switch>
                            <Route path="/post-job" exact>
                                <PostJobGetStarted start={start} isStart={isStart} setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/title" exact>
                                <PostJobTitle setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/description" exact>
                                <PostJobDescription setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/details" exact>
                                <PostJobDetails setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/expertise" exact>
                                <PostJobExpertise setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/visibility" exact>
                                <PostJobVisibility setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/budget" exact>
                                <PostJobBudget setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/post-job/review" exact>
                                <PostJobReview />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    )
}
