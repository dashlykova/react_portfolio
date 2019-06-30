import React from "react"
import JobsList from "./CVExperience"
import StudiesList from "./CVEducation"


const CV = () => {
    return (
        <>
            <div className="mb-24">
            <JobsList/>
            </div>
            <div className="mb-24">
            <StudiesList/>
            </div>
        </>
    )
}
export default CV