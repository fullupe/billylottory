import React, { useState } from 'react'

import { authentication } from '../firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useRouter } from 'next/router'

function Login() {

    const router = useRouter()
  const Nigeria = '+234'

  const [phoneNumber, setPhoneNumber] = useState(Nigeria)
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [error, setError] = useState(false)
  const [OTP, setOTP] = useState('')


  //const auth = getAuth()
  const generateRecap = ()=>{
       window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
        //   'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            
          },
        },
        authentication);
  }

  const requestOTP = (e) => {
    e.preventDefault()
    if (phoneNumber.length >= 12) {
        setError(false);
        generateRecap();
        
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then(confirmationResult=>{
            window.confirmationResult=confirmationResult
        }).catch(error=>{
            //   sms error 
            console.log(error)
        })
        
        setIsOpenForm(true);
      
    } else {    
      setError(true)
    }
  }
  const verifyOTP=(e)=>{
   let otp = e.target.value;
   setOTP(otp)

   if(otp.length >=6){
       //console.log(otp)
       let confirmationResult = window.confirmationResult;
       confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        router.push("/dashboard")
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
   }
  }

  return (
    <form onSubmit={requestOTP} className="h-[500px] w-[400px] rounded-lg p-2 space-y-12 items-center bg-white flex flex-col shadow-2xl  ">
      <p> Sign in with PhoneNumber</p>

      <div>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          placeholder="Enter phone number "
        />
        {error && (
          <p className="text-red-500 italic text-xs mt-2 ">
            Phone Number Less Than 12-Digit
          </p>
        )}
      </div>

      <button
      type="submit"
        // onClick={(e) => requestOTP(e)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
      >
        send
      </button>
      {isOpenForm && 
        <div  className=" flex flex-col ">
          <input
          value={OTP}
          onChange={verifyOTP}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Enter OTP"
          />

        </div>
     }
     <div id="recaptcha-container"></div>
    </form>
  )
}

export default Login
