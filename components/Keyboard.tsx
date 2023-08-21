import React, { useState, Fragment, useEffect } from 'react'

function Keyboard() {

    const keyboardLetters = [
        { id: 1, letter: 'A', isClicked: false, },
        { id: 2, letter: 'B', isClicked: false, },
        { id: 3, letter: 'C', isClicked: false, },
        { id: 4, letter: 'D', isClicked: false, },
        { id: 5, letter: 'E', isClicked: false, },
        { id: 6, letter: 'F', isClicked: false, },
        { id: 7, letter: 'G', isClicked: false, },
        { id: 8, letter: 'H', isClicked: false, },
        { id: 9, letter: 'I', isClicked: false, },
        { id: 10, letter: 'J', isClicked: false, },
        { id: 11, letter: 'K', isClicked: false, },
        { id: 12, letter: 'L', isClicked: false, },
        { id: 13, letter: 'M', isClicked: false, },
        { id: 14, letter: 'N', isClicked: false, },
        { id: 15, letter: 'O', isClicked: false, },
        { id: 16, letter: 'P', isClicked: false, },
        { id: 17, letter: 'Q', isClicked: false, },
        { id: 18, letter: 'R', isClicked: false, },
        { id: 19, letter: 'S', isClicked: false, },
        { id: 20, letter: 'T', isClicked: false, },
        { id: 21, letter: 'U', isClicked: false, },
        { id: 22, letter: 'V', isClicked: false, },
        { id: 23, letter: 'W', isClicked: false, },
        { id: 24, letter: 'X', isClicked: false, },
        { id: 25, letter: 'Y', isClicked: false, },
        { id: 26, letter: 'Z', isClicked: false, },
    ]

    
    return (
        <div className='flex flex-col w-full  gap-6 p-4 lg:p-8 m-auto bg-gradient-to-r from-slate-200 to-slate-300 text-black '>

            <div className='w-full flex flex-wrap'>
                <div className='flex flex-wrap justify-center   mb-12 gap-4 '>
                    {keyboardLetters.map((key) => {
                        const isActived = key.isClicked
                        return (
                            <Fragment key={key.id}>
                                <button className={`  rounded-md shadow-md p-6
                                ${ isActived ? 'bg-red-500' : 'bg-white'}`}
                                    // onClick={}
                                
                               
                                //    disabled={key.isClicked}
                                >{key.letter}</button>
                            </Fragment>
                        )

                    })}

                </div>
            </div>

        </div>
    )
}

export default Keyboard