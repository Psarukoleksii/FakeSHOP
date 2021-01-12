import React from "react";

export const ValidatorAddress= ({address}) =>{

    const good = !address.match(/[A-E]/i) ? 'Not Correct' : null

    return (
        <span>{good}</span>

    )
}

