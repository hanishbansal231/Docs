import React, { useRef, useState } from 'react'
import Card from './Card'

export default function ForeGround() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'green'
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'blue'
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: 'Upload',
                tagColor: 'green'
            }
        },
    ]

    // useState();

    return (
        <>
            <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-10'>
                {
                    data.map((item, idx) => (
                        <Card key={idx} data={item} reference={ref} />
                    ))
                }
            </div>
        </>
    )
}
