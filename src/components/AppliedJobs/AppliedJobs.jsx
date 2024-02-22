import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/localstorage';
import banner from '../../assets/images/bg1.png';
import { AiOutlineDollar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if( filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if( filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }

    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job =>storedJobIds.includes(job.id) )

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds,jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <div className='grid grid-cols-3 ml-[-180px]'>
                <div className='col-span-1'>
                    <img src={banner} alt="" />
                </div>
                <div className='col-span-2 m-auto'>
                    <h2 className='text-3xl font-bold'>Applied Jobs</h2>
                </div>
            </div>
            <div className='flex justify-end'>
                <details className="dropdown ">
                    <summary className="m-1 btn btn-sm">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    displayJobs?.map(job => <div key={job.id} className='grid grid-cols-5 mb-20'>
                        <div className='mr-20 col-span-1 m-auto'>
                            <img src={job.logo} alt="" />
                        </div>
                        <div className='col-span-3'>
                            <h2 className='text-xl font-bold mb-1'>{job.job_title}</h2>
                            <p className='mb-2'>{job.company_name}</p>
                            <div className='mb-2'>
                                <button className='btn-sm  font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]'>{job.remote_or_onsite}</button>
                                <button className='btn-sm  font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]'>{job.job_type}</button>
                            </div>
                            <div className='flex'>
                                <div className=' flex mr-4'>
                                    <MdLocationOn className='text-2xl mr-2'></MdLocationOn>
                                    <p>{job.location}</p>
                                </div>
                                <div className='flex'>
                                    <AiOutlineDollar className='text-2xl mr-2 pt-1'></AiOutlineDollar>
                                    <p>Salary : {job.salary}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 my-auto flex justify-end'>
                            <button className="btn  hover:from-pink-500 hover:to-blue-500 bg-gradient-to-r from-indigo-500 to-purple-500 text-white mt-4">View Details</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AppliedJobs;