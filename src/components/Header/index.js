import React from 'react'

export default function Header() {
    return (
        <div className='main-container'>
           <input type="checkbox" class="theme-switch" id="theme-switch" />

            <div id="page">
                <div class="label">
                <label for="theme-switch" class="switch-label"></label>
                </div>
            </div>
            <div className='header-name'>
            <h1 className='HeaderLogo'>
                 Weather
                 <span>.io</span>
             </h1>
            </div>
        </div>
    )
}
