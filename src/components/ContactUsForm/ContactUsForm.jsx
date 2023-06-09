import React, { useState } from 'react'
import { UserContext } from '../Context/UserContext';
import './ContactUsForm.css'
import { Formik, Form } from 'formik';
import {MyTextInput,MySelect,validationContactSchema } from '../InputTypes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { useContext } from 'react';


export default function ContactUsForm () {

  const { SubmitFormData} = useContext(UserContext);
  const [captcha, setCaptcha] = useState('')



 const submitData = async(formdata)=>{

  if(captcha){
  const res = await SubmitFormData(formdata);

  if(res.status == 200){

    toast.success("Your query submitted. We will contact you soon",{position: "top-center"});
    return true
  }else{
    return false
  }
  }else{
    toast.error("Check re-captcha", {
      position: "top-center"
  });
    // alert('check re-captcha')
  }

 }

  const inputTextAtributes = [{
    'id': 1,
    'label' : 'Name',
    'name' : 'name',
    'type' : 'text',
    'placeholder':'Name*'
  },{
    'id': 2,
    'label' : 'E-mail',
    'name' : 'email',
    'type' : 'email',
    'placeholder':'Email*'

  },{
    'id': 3,
    'label' : 'Mobile Number',
    'name' : 'phone',
    'type' : 'tel',
    'placeholder':'Phone*'
  },{
    'id': 4,
    'label' : 'Message',
    'name' : 'message',
    'type' : 'text',
    'placeholder':'Message'
  }
  ]

  return (

    <div className="contact-banner">
    <div>
    <div className="contact-content" >
      
            <div className='contact-form' >
              <p className='contact-form-heading'>Get In Touch</p>
              <p className='contact-form-text'>We would like to know your daily hustle, let’s talk! Our friendly team is standing by.</p>
            </div>  
            <div  className='form-content'>
        
            <Formik
        initialValues={{
          name:'',
          email:'',
          phone:'',
          message:''
        }}
        validationSchema= {validationContactSchema}
        onSubmit={async(values, { resetForm }) => {
          var res = await submitData(values);
          if(res){
            resetForm();
          }
        }}
      >
        <Form>
        <div>

            {inputTextAtributes.map((val)=>(
              <div  key={val.id}>
                <MyTextInput
              
              {...val}
            />
              </div>
            ))}


          
        </div>

      <ReCAPTCHA
             sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
             onChange={(value)=>{setCaptcha(value)}}
        />

          <div className='mt-5'>
          <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
            </div>
            <ToastContainer />
            </div>
    </div>
    
    </div>
  )
}



