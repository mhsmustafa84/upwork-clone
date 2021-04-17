import React from 'react'
import "./ImgWithActiveStatus.css"

export default function ImgWithActiveStatus() {
    return (
        <div>
              <img
                data-ng-if="photoUrl && !fallbackAvatar"
                data-ng-src="https://www.upwork.com/profile-portraits/c1FM2uPfI74gE_uciZLc_y3KAM_Yt3oKQkn9yLo8JI1qVCePeE1ZiaxLTn_SQKUQzE"
                alt="Anna D.'s avatar"
                data-image-fallback="setFallback()"
                className="rounded-circle avatar vertical-align-middle m-0 avatar-sm avatar-responsive"
                data-ng-class="::{'avatar-company': isAgencyProfile}"
                src="https://www.upwork.com/profile-portraits/c1FM2uPfI74gE_uciZLc_y3KAM_Yt3oKQkn9yLo8JI1qVCePeE1ZiaxLTn_SQKUQzE"
              />
              <span className="hotspotimg">
                <button className="hotspotimg__btn" />
              </span>
            </div>
    )
}
