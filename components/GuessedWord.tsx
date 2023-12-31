import React,{Fragment} from 'react'

function GuessedWord() {
    const guessedWord =  [
        {id:1, letter:'B'},
        {id:2, letter:'L'},
        {id:3, letter:'E'},
        {id:4, letter:'A'},
        {id:5, letter:'C'},
        {id:6, letter:'H'},
    ]
  return (
    <div className='flex flex-col w-full  gap-6 p-4 lg:p-8 m-auto bg-gradient-to-r from-slate-200 to-slate-300 text-black '>

            <div className='w-full flex flex-wrap justify-center'>
                <div className='flex flex-wrap justify-center   mb-12 gap-4 '>
                    {guessedWord.map((key) => {
                        return (
                            <Fragment key={key.id}>
                                <button className='bg-transparent border-b-2 border-black  p-4 pb-0 font-bold text-xl'
                                disabled    
                                >
                                    <p className='text-red-500'>{key.letter}</p>
                                    </button>
                            </Fragment>
                        )

                    })}

                </div>
            </div>

        </div>
  )
}

export default GuessedWord