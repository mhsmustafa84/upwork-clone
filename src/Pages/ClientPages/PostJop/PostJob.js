import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import './PostJob.css'
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

    return (
        <section className="sec-bg-cn p-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <PostJobAside />
                    </div>
                    <div className="col-lg-9">
                        <Switch>
                            <Route path="/post-job" exact>
                                <PostJobGetStarted start={start} isStart={isStart} />
                            </Route>
                            <Route path="/post-job/title" exact component={PostJobTitle} />
                            <Route path="/post-job/description" exact component={PostJobDescription} />
                            <Route path="/post-job/details" exact component={PostJobDetails} />
                            <Route path="/post-job/expertise" exact component={PostJobExpertise} />
                            <Route path="/post-job/visibility" exact component={PostJobVisibility} />
                            <Route path="/post-job/budget" exact component={PostJobBudget} />
                            <Route path="/post-job/review" exact component={PostJobReview} />
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    )
}
