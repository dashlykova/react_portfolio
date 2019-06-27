import React from "react"
import { UndrawDesignerLife } from "react-undraw-illustrations"


const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawDesignerLife />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">About Me</h1>
                    <p className="content-text">Hi and welcome! I'm Dash. A junior software developer based in Stockholm, Sweden.
                        I am passionate about programming, books and travelling and learning cool. This is a portfolio of my work.</p>
                </div>

            </div>
        </div>
    )
}
export default About