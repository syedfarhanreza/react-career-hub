import React from 'react';
import { AiOutlineDollar, AiOutlineMail } from 'react-icons/ai';
import { SlCalender } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;


    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center mb-10'>Job Details</h2>
            <div className='grid gap-4 md:grid-cols-5'>
                <div className='md:col-span-3'>
                    <p className='mb-6'><span className='font-bold'>Job Description</span>: {job_description} </p>
                    <p className='mb-6'><span className='font-bold'>Job Responsibility</span>: {job_responsibility} </p>
                    <div className='mb-6'>
                        <span className='font-bold'>Educational Requirements:</span>
                        <p>{educational_requirements} </p>
                    </div>
                    <div className='mb-6'>
                        <span className='font-bold'>Experiences:</span>
                        <p> {experiences} </p>
                    </div>
                </div>
                <div className='md:col-span-2 p-5'>
                    <div className='border-b-2'>
                        <h2 className='text-xl font-bold mb-2 pb-4'>Job Details</h2>
                    </div>
                    <br />
                    <div className='flex mb-2'>
                        <AiOutlineDollar className='text-2xl mr-2 pt-1 text-purple-400'></AiOutlineDollar>
                        <p className='font-bold mr-1'>Salary :</p>
                        <p>{salary} (Per Month)</p>
                    </div>
                    <div className='flex mb-6'>
                        <SlCalender className='text-2xl mr-2 pt-1 text-purple-400'></SlCalender>
                        <p className='font-bold mr-1'>Job Title : </p>
                        <p> {job_title}</p>
                    </div>
                    <div className='border-b-2 mb-2'>
                        <h2 className="text-xl font-bold pb-4">Contact Information</h2>
                    </div>
                    <div className='flex mb-2'>
                        <FaPhoneAlt className='text-xl mr-2 pt-1 text-purple-400' />
                        <p className='font-bold mr-1'>Phone :</p>
                        <p>{contact_information.phone}</p>
                    </div>
                    <div className='flex mb-2'>
                        <AiOutlineMail className='text-2xl mr-2 pt-1 text-purple-400' />
                        <p className='font-bold mr-1'>Email :</p>
                        <p>{contact_information.email}</p>
                    </div>
                    <div className='flex mb-2'>
                        <MdOutlineLocationOn className='text-2xl mr-2 pt-1 text-purple-400' />
                        <p className='font-bold mr-1'>Address:</p>
                        <p>{contact_information.address}</p>
                    </div>
                    <button className=" w-full btn  hover:from-pink-500 hover:to-blue-500 bg-gradient-to-r from-indigo-500 to-purple-500 text-white ">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;