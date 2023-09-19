import styles from './Projects.module.scss'
import Slider from "react-slick"
import RefObject from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faCircleArrowRight, faCircleArrowLeft } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { ActivePathContext } from '@/context/ActivePath'
import { projects } from '@/costants/projects'

export const Projects = () => {
    const { activePath } = useContext(ActivePathContext)
    const arrowRef = useRef<RefObject>(null)

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className={styles.projects} >
            <h3 className={styles.title}>Projects</h3>
            <Container>
                <Slider ref={arrowRef} {...settings}>
                    {projects.map(({ id, title, description, link }) => (
                        <Card key={id}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p><a href={link}><b>Link</b></a></p>
                        </Card>
                    ))}
                </Slider>
            </Container>
            <div className={styles.buttons}>
                <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className={styles.arrow}
                    onClick={() => arrowRef.current?.slickPrev()}
                />
                <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className={styles.arrow}
                    onClick={() => arrowRef.current?.slickNext()}
                />
            </div>
            <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
        </div>
    )
}

const Container = styled.div`
    margin: 0 auto;

    @media(max-width:840px){
        width: 90%;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #00abf0;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Card = styled.div`
    position: relative;
    padding: 1.5rem;
    border-radius: .6rem;
    overflow: hidden;

    h3 {
        font-size: 2rem;
    }

    p {
        font-size: 1.6rem;
        padding-top: .5rem;
    }

    a {
        color: #00abf0;
    }
`