import React from 'react'

export default function TypeOfWorkSmallSize() {
    return (
        <div>
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option value>Any type of work</option>
                <option value={2}>Development &amp; IT</option>
                <option value={3}>Design &amp; Creative</option>
                <option value={1}>
                    Finance &amp; Accounting</option>
                <option value={2}>Admin &amp; Customer Support</option>
                <option value={3}>Engineering &amp; Architecture</option>
                <option value={2}>Legal</option>
                <option value={3}>
                    Sales &amp; Marketing</option>
                <option value={2}>
                    Writing &amp; Translation</option>
            </select>
        </div>
    )
}
