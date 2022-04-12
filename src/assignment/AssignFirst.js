import React, {useEffect} from 'react'

// 1st assignment
// add all the count values using for loop and console the output. output should be 6.
export const AssignFirst = () => {
    const res = [
        {
            count: 1,
        },
        {
            count: 2,
        },
        {
            count: 3,
        },
    ];
    const addCount = () => {
        let total = 0;
        for (let index = 0; index < res.length; index++) {
            total += res[index].count;
        }
        console.log("Assignment 1: ", total)
    }

    useEffect(() => {
        addCount()
    })

    return (
        <></>
    )
}
