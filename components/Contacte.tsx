import { sendContactForm } from '@/lib/api';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Contacte() {
  const [toggleBtnColor, setToggleBtnColor] = useState(false)
  const { register, handleSubmit, reset, watch, formState, formState: { errors } } = useForm();


  const watchName = watch('name')
  const watchEmail = watch('email')
  const watchMessage = watch('message')

  useEffect(() => {
    if (watchName && watchEmail && watchMessage && watchName.trim() !== '' && watchEmail.trim() !== '' && watchMessage.trim() !== '') {
      setToggleBtnColor(true)
    } else {
      setToggleBtnColor(false)
    }
  }, [watchName, watchEmail, watchMessage])

  return (
    <div className='flex flex-col w-full items-center  gap-6 p-4 lg:p-8 m-auto bg-gradient-to-r from-slate-200 to-slate-300'>
      <div className='flex flex-col  items-center w-full my-16   gap-4'>
        <h1 className='text-center text-3xl font-bold text-customTextNoirPo'>CONTACT</h1>
        <p className='text-center text-customTextNoir2  max-w-xl'>N&apos;hésitez pas à me contacter en soumettant le formulaire ci-dessous et je vous répondrai dans les plus brefs délais</p>
      </div>

      <div className='flex flex-col items-center  w-full mb-12 '>

        <form action="" className='flex bg-white w-full md:w-1/2 rounded-md shadow-md  p-10  '
          onSubmit={handleSubmit(async (data) => {
            try {
              await sendContactForm(data)
            } catch (err) {
              // console.log(err)
            }
            // console.log(data)
            reset();
          })}>

          <div className='flex flex-col w-full gap-10   '>
            {formState.isSubmitted ? ( // Vérifiez si le formulaire a été soumis avec succès
              <p className="text-customVert w-full text-xl text-center">Votre message a été envoyé avec succès!</p>
            ) : (
              <p className="text-red-500">{errors.message}</p>
            )}
            <div className='flex flex-col w-full gap-2'>
              <label className='text-customTextNoir font-semibold text-sm ' htmlFor="name">Nom</label>
              <input className='rounded border-gray-500 bg-gray-200 border-opacity-30   text-customTextNoir font-medium text-sm'
                {...register('name', {
                  required: 'Ce champ est requis',

                })}
                placeholder='Entrez Votre Nom'
                name='name'
                type="text"

              />
              <p className='text-red-500  w-full justify-start '>{errors.name?.message}</p>
            </div>


            <div className='flex flex-col w-full gap-2'>
              <label className='text-customTextNoir font-semibold text-sm ' htmlFor="name">Email</label>
              <input className='rounded border-gray-500 bg-gray-200 border-opacity-30   text-customTextNoir font-medium text-sm'
                {...register('email', {
                  required: 'Ce champ est requis',
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Entre un email valide' },
                })}
                placeholder='Entrez Votre Email'
                name='email'
                type="text"
              />
              <p className='text-red-500  w-full justify-start '>{errors.email?.message}</p>
            </div>


            <div className='flex flex-col w-full gap-2'>
              <label className='text-customTextNoir font-semibold text-sm ' htmlFor="name">Message</label>
              <textarea rows={10} className='rounded resize-none border-gray-500 bg-gray-200 border-opacity-30   text-customTextNoir font-medium text-sm'
                {...register('message', {
                  required: 'Ce champ est requis',
                })}
                name='message'
                placeholder='Entrez Votre Message'

              />
              <p className='text-red-500  w-full justify-start '>{errors.message?.message}</p>
            </div>


            <div className='flex justify-center  sm:justify-end  '>
              <button type='submit' className={` w-full sm:w-auto   font-bold py-3 px-16 rounded shadow-md text-customTextNoir2  
                ${toggleBtnColor ? 'bg-customVert transition-all duration-300 hover:translate-y-1' : 'bg-customTextGris3'} `}
                disabled={!toggleBtnColor || formState.isSubmitting}
              >{formState.isSubmitting ? 'Loading...' : 'Envoyer'}</button>
            </div>

          </div>



        </form>
      </div>

    </div>
  )
}

export default Contacte