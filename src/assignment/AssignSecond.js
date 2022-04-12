import React, { useEffect } from 'react'

// 2nd assignment
// add all the count values using for loop and console the output. output should be 8. 
export const AssignSecond = () => {
    const response = {
        maran: {
            count: 1,
        },
        gas: {
            count: 2,
        },
        prelude: {
            count: 5,
        },
        keys: ['maran', 'gas', 'prelude'],
    };

    const addCount = () => {
        let total = 0;
        for (let index = 0; index < response.keys.length; index++) {
            total += response[response.keys[index]].count;
        }
        console.log("Assignment 2: ", total)
    }

    useEffect(() => {
        addCount()
    })

    return (
        <></>
    )
}
