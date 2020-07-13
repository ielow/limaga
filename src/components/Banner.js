import React from  'react';
import * as ad from '../images/alert.svg';
import {Link} from 'gatsby';
const Banner = props =>{
    return(
        <section className="banner">
            <div className="container">
                <div className="row-center">
                    <img className="small-icon" src={ad} alt="Advice"/>
                    <h2>Conoce nuestros productos y servicios diseñados especialmente para combatir el Covid-19</h2>
                    <Link to="/covid-19"><button className="btn">Conócelos</button></Link>
                </div>                
            </div>
        </section>
    )
}
export default Banner;