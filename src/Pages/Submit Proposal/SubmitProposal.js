/* eslint-disable jsx-a11y/anchor-is-valid */
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { auth, db, storage } from '../../firebase';
import { subCollection, updateUserData } from '../../Network/Network';
import { jobDataAction } from '../../Store/actions/jobDataAction';
import { talentDataAction } from '../../Store/actions/talentData';

export default function SubmitProposal() {
  const { id } = useParams();
  const job = useSelector((state) => state.jobData);
  const user = useSelector(state => state.talentData);
  const [proposalData, setproposalData] = useState({ proposalImages: [] });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobDataAction(id));
    dispatch(talentDataAction());
    console.log(user);
  }, []);
  let date = new Date()
  let arr = ['s'];
  arr = job?.skills;
  const handlVal = (e) => {
    const files = e.target.files;

    if (e.target.name === 'coverLitter')
      setproposalData({ coverLitter: e.target.value });
    else {
      if (files[0]) {
        const upload = storage.ref(`proposalImages/${files[0].name}`).put(files[0]);
        upload.on(
          "state_changed",
          (snapshot) => { },
          (err) => {
            console.log(err);
          },
          () => {
            storage.ref("proposalImages")
              .child(files[0].name)
              .getDownloadURL()
              .then(url => {
                proposalData.proposalImages?.push(url);
                setproposalData({ ...proposalData, proposalImages: proposalData.proposalImages });
                console.log(proposalData);
              });
          })
      }


    }
  }

  const handleProposal = () => {
    console.log(proposalData);
    //talent subproposal
    subCollection('talent', 'jobProposal', { jobId: id, status: "proposal" }, auth.currentUser.uid);
    updateUserData('talent', { connects: user.connects - 2 })

    //subcollection proposal
    subCollection('job', 'proposals', {
      talentName: user.firstName + user.lastName,
      talentId: auth.currentUser.uid,
      coverLitter: proposalData.coverLitter,
      // images: proposalData?.proposalImages,
      //budged:proposalData.price,
      clientId: job.authID,
    }, id)


  }

  return (
    <>
      <main>
        <div className="container">
          <h1 className="h3 py-4">Submit a proposal</h1>
          <div className="row">
            <div className="col">
              <div className="bg-white border rounded-bottom rounded-top">
                <h2 className="h4 border-bottom p-4">Proposal settings</h2>
                <div className="ps-4 pt-2">
                  <p className="fw-bold">Propose with a Specialized profile</p>
                </div>
                <div className="btn-group w-50 ps-4 pb-2" role="group">
                  <button id="btnGroupDrop1" type="button" className="btn dropdown-toggle shadow-none border text-start py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    General Profile
                    <i className="fa fa-sort-down float-end" />
                  </button>
                  <ul className="dropdown-menu w-75" aria-labelledby="btnGroupDrop1">
                    <li className="border-start border-4 border-success"><a className="dropdown-item" href="#">General Profile</a></li>
                    <li><a className="dropdown-item" href="#">{user.title}</a></li>
                  </ul>
                </div>
                <div className="ps-4 py-2">
                  <p>This proposal requires <strong>2 Connects </strong><span className="upw-c-cn"><i className="fas fa-question-circle" /></span></p>
                  <p>When you submit this proposal, you'll have<strong> {user.connects - 2} </strong>remaining</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="bg-white border rounded-bottom rounded-top">
                <h2 className="h4 border-bottom p-4">Job details</h2>
                <div className="ps-4 pt-2 d-flex">
                  <div className="w-75">
                    <p className="fw-bold">{job.jobTitle}</p>
                    <div className="mb-3">
                      <span className="bg-cat-cn py-1 px-2 me-3 rounded-pill">{job.jobCategory}</span>
                      {/* <span>{date.setSeconds(job?.postTime?.seconds)}</span> */}
                    </div>
                    <div className="mb-3">
                      <p>{job.jobDescription}</p>
                      <a className="upw-c-cn" href>View job posting</a>
                    </div>
                  </div>
                  <div className="w-25 border-start m-3 ps-3">
                    <div>
                      <span><i className="fas fa-head-side-virus" /></span>
                      <span className="ps-2"><strong>Expert</strong></span>
                      <p className="ps-4">{job.jobExperienceLevel}</p>
                    </div>
                    <div>
                      <span><i className="far fa-clock" /></span>
                      <span className="ps-2"><strong>Hours to be determined</strong></span>
                      <p className="ps-4">{job.jobPaymentType}</p>
                    </div>
                    <div>
                      <span><i className="far fa-calendar-alt" /></span>
                      <span className="ps-2"><strong>{job.jobDuration}</strong></span>
                      <p className="ps-4">Project Length</p>
                    </div>
                  </div>
                </div>
                <div className="mx-4 py-2 border-top pb-4">
                  <p className="fw-bold">Skills and expertise</p>
                  {/* {arr.map((e)=><span className="bg-cat-cn py-1 px-2 me-3 rounded-pill">{e}</span>)} */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="bg-white border rounded-bottom rounded-top">
                <h2 className="h4 border-bottom p-4">Job details</h2>
                <div className="ps-4 pt-2 d-flex">
                  <div className="w-75">
                    <p className="fw-bold">What is the rate you'd like to bid for this job?</p>
                    <div className="my-4">
                      <span>Your profile rate: <strong>$20.00/hr</strong></span>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                      <div>
                        <span><strong>Hourly Rate</strong></span>
                        <p>Total amount the client will see on your proposal</p>
                      </div>
                      <div className="me-5 mt-2 position-relative jd-inp-cn">
                        <div className="position-absolute"><i className="fas fa-dollar-sign" /></div>
                        <input className="form-control text-end" type="text" defaultValue={20.00} /><span className="position-absolute">/hr</span>
                      </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between border-top pt-3">
                      <div>
                        <p className="fw-bold">20% Upwork Service Fee <a className="upw-c-cn fw-normal" href>Explain this</a></p>
                      </div>
                      <div className="me-5 mt-2">
                        <span style={{ position: 'relative', right: '115px' }}><i className="fas fa-dollar-sign" /></span>
                        <span className="text-end">-4.00</span>
                        <span style={{ position: 'relative', right: '-30px' }}>/hr</span>
                      </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between border-top pt-3">
                      <div>
                        <span><strong>You'll Receive</strong></span>
                        <p>The estimated amount you'll receive after service fees <span className="upw-c-cn"><i className="fas fa-question-circle" /></span></p>
                      </div>
                      <div className="me-5 mt-2 position-relative jd-inp-cn">
                        <div className="position-absolute"><i className="fas fa-dollar-sign" /></div>
                        <input className="form-control text-end" type="text" defaultValue={16.00} /><span className="position-absolute">/hr</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-25 m-3 ps-3">
                    <svg width="120px" role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg">
                      <path d="M72.5.5L16.8 17.6v61c0 5.6 1.4 11.2 4.2 16.1 6.1 10.8 20.3 27.5 51.5 34.8 31.2-7.2 45.4-24 51.5-34.8 2.8-4.9 4.2-10.5 4.2-16.1v-61L72.5.5z" fill="#6fda44" />
                      <path d="M128.2 78.6v-61L72.5.5v129c31.2-7.2 45.4-24 51.5-34.8 2.8-4.9 4.2-10.4 4.2-16.1z" fill="#34ba08" />
                      <path d="M75.9 75.9c2.8-.4 4.4-1.6 4.4-4 0-2-1.2-3.2-4.4-4.9l-6.1-1.6C61 62.9 56.5 59.7 56.5 52c0-6.9 5.3-11.3 13.3-12.5v-3.6h6.5v3.6c4.4.4 8.1 2 11.7 4.4l-4 7.3c-2.4-1.6-5.3-2.8-7.7-3.6 0 0-2-.8-6.1-.4-3.2.4-4.4 2-4.4 4s.8 3.2 4.4 4.4l6.1 1.6C86 59.6 90 63.7 90 70.5c0 6.9-5.3 11.7-13.3 12.5v4h-6.5v-4c-6.1-.4-11.3-2.4-15.4-5.7l4.9-7.3c3.2 2.4 6.5 4.4 10.1 5.3 4.1 1 6.1.6 6.1.6z" fill="#fff" />
                    </svg>
                    <p>Includes Upwork Hourly Protection<a className="upw-c-cn" href>Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pb-5">
            <div className="col">
              <div className="bg-white border rounded-bottom rounded-top">
                <h2 className="h4 border-bottom p-4">Additional details</h2>
                <div className="ps-4 pt-2 pe-4">
                  <p className="fw-bold">Cover Letter</p>
                  <textarea name='coverLitter' className="form-control" rows={8} defaultValue={""} onChange={handlVal} />
                </div>
                <div className="mx-4 mt-3 py-2 pb-4">
                  <p className="fw-bold">Attachments</p>
                  <div className="d-flex mb-3">
                    {
                      proposalData.proposalImages &&
                      proposalData.proposalImages.map(url => {
                        return <div className="mx-2" style={{ maxWidth: "50px", maxHeight: "50px" }}>
                          <img className="w-100 h-100 rounded-circle" src={url} />
                        </div>
                      })
                    }
                  </div>
                  <div className="attachments-cn">
                    <p className="py-2 text-center mt-2">drag or  <label for="file" className="upw-c-cn me-1" style={{ cursor: "pointer" }}>upload</label>
                      <input id="file" type="file" name="images" className="d-none" onInput={handlVal} /> project files</p>
                  </div>
                  <p className="my-3">You may attach up to 10 files under the size of <strong>25MB</strong> each. Include work samples or other documents to support your application. Do not attach your résumé — your Upwork profile is automatically forwarded to the client with your proposal.</p>
                </div>
                <div className="border-top ps-4 py-4">
                  <button className="btn shadow-none text-white" style={{ backgroundColor: '#37a000' }} onClick={handleProposal}>Submit Proposal</button>
                  <button className="btn shadow-none upw-c-cn">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
