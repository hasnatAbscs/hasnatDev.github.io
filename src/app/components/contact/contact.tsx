"use client";
import React from "react";
import { socialLinks } from "@/src/app/data/content";
import IconButton from "@/src/app/components/common/icon-button";

const Contact = () => {
    return (
        <section id='contact' className='px-6 mb-16 md:px-40 md:h-50vh'>
            <h2 className='text-4xl'>Contact</h2>
            <p className='text-xl mt-4 md:w-6/12'>Lets get in touch</p>
            <div className='grid gap-6 grid-cols-4 justify-items-center	my-20'>
                {socialLinks.map((link, index) => (
                    <IconButton
                        index={link.name}
                        key={index}
                        href={link.url}
                        icon={link.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default Contact;