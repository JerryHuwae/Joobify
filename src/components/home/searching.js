'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Card } from 'flowbite-react';
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import axiosInstance from '@/utils/axios';
import { joobifyEndpoint } from '@/utils/api';

const JobSearching = ({ query, searchResults }) => {
    return (
        searchResults.status === 200 && searchResults.data.length > 0 ? (
            searchResults.data.map((job, id) => (
                <Link key={id} href={{ pathname: `/jobs/${job.id}` }}>
                    <Card className="w-full h-auto object-cover max-w-full rounded-lg shadow-md relative overflow-hidden" imgSrc={job.companyProfileImage} horizontal="true">
                        <h5 className="text-2xl main-color font-bold tracking-tight text-gray-900 dark:text-white">{job.title}</h5>

                        <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-normal"><FaBuilding className='inline-block' /> {job.companyName} <span className='text-md main-color font-bold'>({job.jobType})</span></p>
                        <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-normal"><FaLocationDot className='inline-block' /> {job.location}</p>
                        <p className="font-light text-gray-700 dark:text-gray-400 text-[10px] whitespace-normal text-end">Dibuat pada {job.postedOn}</p>
                    </Card>
                </Link>
            ))
        ) : (
            <p className="text-2xl main-color font-bold text-center">Hasil pencarian {query} tidak ditemukan!</p>
        )
    );
}

export default JobSearching;