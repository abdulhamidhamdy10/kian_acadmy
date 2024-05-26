/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const CardHover = () => {
    return (
        <div>
            <div class="card-container">
                <div class="card-card">
                    <div class="content">
                        <div class="img"><img src="https://unsplash.it/200/200" /></div>
                        <div class="cardContent">
                            <h3>Luis Molina<br /><span>Web Developer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}>
                            <a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li style={{ '--i': 2 }}>
                            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default CardHover