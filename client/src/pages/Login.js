import React from 'react'

export const Login = () => {
  return (
    <>
        <div className='col-md-8 mx-auto'>
          <div className='login_wrap'>
            <div className='login_section'>
              <div className='login_img'>
                <img src='#' className='img-fluid'/>
              </div>
              <div className='login_content'>
                <div className='row'>
                  <div className='col-md-4'>
                    <label>Email</label>
                  </div>
                  <div className='col-md-8'>
                    <input type="email" className='form-control'/>
                  </div>
                  <div className='col-md-4'>
                    <label>Password</label>
                  </div>
                  <div className='col-md-8'>
                    <input type="password" className='form-control'/>
                  </div>
                </div>
                <div className='col-md-4 mx-auto'>
                    <button type="button" className='btn'/>
                  </div>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}
