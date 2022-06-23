import styled from 'styled-components'
import { above } from './index'

export const colors = {
    purpleStrong: '#3E2F73',
    purpleMedium: '#453A8C',
    purpleLigth: '#AAA4BF',
    greyMedium: '#182126',
    lightBlue: '#23C7D9',
    Black: '#000'
}

export const BlogPostBodyContainer = styled.article`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    text-aling: left;
    margin-top: 128px;
    padding: 0 32px;
    p {
        font-size: 20px;
        font-weight: 400;
        letter-spacing: -0.003em;
        color: #F7F4F3;
        a {
            color: #adb5bd;
            text-decoration: none;
            font-weight: 500;
            transition-duration: 0.27s;
        }
        a:hover {
            color: #CC5803;
            transition-duration: 0.27s;
        }
    }
`

export const BodyContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 15px 0 10px 0;
    text-decoration: none;

    a {
        text-decoration: none;
    }

    h1 {
        color: #000;
    }
    
    .buttons-container {
        display: flex;
        max-width: 70%;
        min-width: 60%;
        justify-content: space-between;
        align-items: center;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 30px
    }
    
    .buttons ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        text-decoration: none;
    }

    .buttons-container .buttons ul li a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        cursor: pointer;
        transition-duration: 0.1s;
    }

    .buttons-container .buttons ul li a:hover {
        font-size: 20px;
        transition-duration: 0.8s;
    }

    .buttons-container .buttons ul li {
        display: flex;
        align-items: center;
        margin: 20px;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
      
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
      
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
      
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
      
    input:checked + .slider {
        background-color: #2196f3;
    }
      
    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }
      
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
      
      /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }
      
    .slider.round:before {
        border-radius: 50%;
    }
      
    .toggle-switch {
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        height: 100%;
    }
      
    .toggle-switch .switch {
        margin-left: 20px;
    }
`