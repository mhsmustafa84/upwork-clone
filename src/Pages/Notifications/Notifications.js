import React from 'react'

export default function Notifications() {
    return (
        <div className="container">
            <div className="row mt-5 mb-3 mx-5">
                <h3>Notifications</h3>
            </div>
            <div className="mt-3 mb-5 mx-5">
            <div className="row border border-1 bg-white py-3 px-3">
                <h5>Check what's new</h5>
            </div>
            <div className="row border border-1 bg-white py-3 px-3">
                <div className="col-1"><svg width="20" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" role="img"><path d="M9.679 5.978c-.813 0-1.076.783-1.16 1.25l-.003.016-.094.44c.385.31.805.501 1.257.501a1.105 1.105 0 000-2.207z"></path><path d="M7 0a7 7 0 100 14A7 7 0 007 0zm2.679 9.308a2.754 2.754 0 01-1.505-.453l-.496 2.332H6.537l.683-3.215a6.845 6.845 0 01-.806-1.314v.486a2.167 2.167 0 01-2.157 2.165A2.167 2.167 0 012.1 7.144V4.239h1.116v2.905a1.041 1.041 0 002.08 0V4.239h1.118c.22.757.599 1.657 1.097 2.406.326-1.11 1.131-1.783 2.169-1.783 1.224 0 2.22.996 2.22 2.22a2.23 2.23 0 01-2.22 2.227z"></path></svg></div>
                <div className="col-10">Clients who post in "Graphic, Editorial & Presentation Design" also look for freelancers in "Graphic Design"
                    April 16</div>
                    <a href="#" className="col-1"><svg width="15" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" role="img"><polygon points="12.524 0 7 5.524 1.476 0 0 1.476 5.524 7 0 12.524 1.476 14 7 8.476 12.524 14 14 12.524 8.476 7 14 1.476"></polygon></svg></a>
                        
                        
            </div>
            </div>
        </div>
    )
}
