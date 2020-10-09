import React, { Component } from "react";
import {Element} from "react-scroll";
import classes from './WorkExperience.module.scss';
import SectionTitle from "../../Components/UI/SectionTitle/SectionTitle";
import  Card  from 'react-bootstrap/Card';
import EmendisLogo from '../../img/Emendis_logo.jpg';

class WorkExperience extends Component {
    render() {

        return (
            <Element name="workExperience">
                <section>
                    <SectionTitle titleType="Dark">Work Experience</SectionTitle>
                    <div className={classes.wrapper}>
                        <Card >
                            <Card.Img className={classes.img} variant="top" src={EmendisLogo} />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title className={classes.cardTitle}>Angular Developer at Salvum LT</Card.Title>
                                <Card.Text>
                                    <p> Worked for Netherlander company Emendis.nl as an Angular developer for 8 months. </p>
                                   <p>Technologies used:</p>
                                    <ul className={classes.list}>
                                        <li><strong>Angular:</strong> For Front-end Development</li>
                                        <li><strong>Docker:</strong> For setting up Laravel</li>
                                        <li><strong>Jira:</strong> For Agile methodology, sprint planning, working on tasks.</li>
                                        <li><strong>Bitbucket:</strong> For version control git.</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </Element>
        );
    }
}

export default WorkExperience;
