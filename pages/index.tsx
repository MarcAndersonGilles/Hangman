

import GuessedWord from '@/components/GuessedWord'
import Hangman from '@/components/Hangman'
import Keyboard from '@/components/Keyboard'







export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between  w-full h-full">
      <section className=' w-full  bg-gradient-to-r from-slate-200 to-slate-300 h-full' id='presentation'>
        <div className='flex w-full justify-center'>
        <Hangman />
        </div>
      
      </section>
      
      <section className='w-full h-full' id='articles'>
      <GuessedWord />
      </section>

      <section className='w-full ' id='contact'>
        <div className='flex  w-full'>
        <Keyboard />
        </div>  
      </section>

     
    </main>
  )
}
