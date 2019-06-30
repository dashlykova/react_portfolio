import React from "react"

const JobCard = (props) => {
    let job = props.job
    return (

        <div key={job.id} className="overflow-hidden border">
            <img src={job.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />


            <div className="px-6 py-4" style={{ minHeight: '150px' }} >
                <div className="font-bold text-xl mb-2">{job.name}</div>
                <p className="text-grey-darker text-base">
                    {job.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <button className="bg-blue-darkest hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">
                    Details
                </button>
            </div>

        </div>
    )
}

export default JobCard