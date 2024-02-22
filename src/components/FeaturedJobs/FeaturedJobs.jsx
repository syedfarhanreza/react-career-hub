import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className='mb-10'>
            <div className='text-center'>
                <h2 className="text-5xl mb-4">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='flex justify-center'>
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="btn  hover:from-pink-500 hover:to-blue-500 bg-gradient-to-r from-indigo-500 to-purple-500 text-white mt-5">Show All jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;