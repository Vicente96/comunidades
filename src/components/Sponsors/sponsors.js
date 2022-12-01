import React from "react";
import "../Sponsors/sponsors.css"

function Sponsors(){
    return(
        <div className='container-fluid text-center' id='container-sponsors'>
            <div>
                <h1>NUESTROS SPONSORS</h1>
            </div>
            <div className='row align-items-start'>
                <div className='col'>
                    <img src={require('../Sponsors/image-sponsors/image-capital.png')} alt='logo capital'/>
                </div>
                <div className='col'>
                    <img src={require('../Sponsors/image-sponsors/image-desec.png')} alt='logo desec'/>
                </div>
                <div className='col'>
                    <img src={require('../Sponsors/image-sponsors/image-ficosec.png')} alt='logo ficosec'/>
                </div>             
            </div>
            <div className='row align-items-start'>
                <div className='col'>
                    <img src={require('../Sponsors/image-sponsors/image-futura.png')} alt='logo futura'/>
                </div>
                <div className='col'>
                    <img src={require('../Sponsors/image-sponsors/image-gobierno.png')} alt='logo gobierno'/>
                </div>
                <div className='col'>
                    <img src={require('../Sponsors/image-sponsors/image-tecno.png')} alt='logo tecnologico'/>
                </div>
            </div>               
        </div>
    )
}
export default Sponsors;