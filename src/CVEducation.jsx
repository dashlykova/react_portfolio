import React, { Component } from "react"
import axios from "axios"
import StudyCard from "./StudyCard"
import './css/tailwind.css'

class Studies extends Component {
    constructor () {
        super();
        this.state = {
            studies: [ ]
        };
    }

    componentDidMount() {
        axios.get('./src/data/cv.education.json')
            .then(response => {
                this.setState({
                    studies: response.data
                })
            })
    }

    render() {
        const studies = this.state.studies
        let studiesList
        if (studies.length > 0) {
            studiesList = study.map(study => {
                return (
                    <div key={study.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <StudyCard study={study} />
                    </div>
                )
            })
        }

        return (
            <div className="content-wrapper">
                <div className="flex mb-4">
                    <div className="w-1/4"></div>
                    <div className="w-3/4">
                        <h1>Education</h1>
                        <p></p>
                    </div>
    
                </div>
    
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {studiesList}
                </div>
            </div>
        )
    }
};

export default Studies