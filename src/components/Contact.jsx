import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
        <main>
            <h1>Contact-us</h1>
            <form >
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Enter you Name'/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder='Enter you Email'/>
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="email" required placeholder='Enter you Email'/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
      
    </div>
  )
}
