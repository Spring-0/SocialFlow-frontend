import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className='mx-5'>
        <div className='h-auto max-w-[30vh] min-w-[30vh] min-h-[30vh] bg-purple-100 flex flex-col text-center rounded-xl border-black border hover:scale-[1.13] hover:shadow-purple-300 shadow-lg duration-300'>
          <header className='w-full py-3 border-b border-black'>
            <h1 className='text-2xl font-normal '>{props.title}</h1>
          </header>
          <body className='w-full p-3 border-b border-black wrap whitespace-break-spaces'>
            <h1>{props.content1}</h1>
          </body>
          <footer className='p-3'>
            {props.footer}
          </footer>
        </div>
      </div>
    </div>
  )
}
