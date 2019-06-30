import React from "react"
import ExperienceList from "./CVExperience"
import StudyList from "./CvEducation"


const Cv = () => {
    return (
        <>
            <div className="mb-24">
            <ExperienceList/>
            </div>
            <div className="mb-24">
            <StudyList/>
            </div>
        </>
    )
}
export default Cv