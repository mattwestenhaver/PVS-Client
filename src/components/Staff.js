import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import Ryan from '../images/ryan-petakoff.jpg';
import Mark from '../images/mark-ramirez.jpg';
import Joel from '../images/joel-ocampo.jpg';
import logo from '../images/logo-white.png';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const Staff = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
    }, []);

    return (
        <div className="staff-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Staff - Premiere Valet Services, Inc.</title>
            </Helmet>
            <div className="staff-header">
                <img src={logo} alt="PVS White Logo" />
            </div>
            <div className="staff-main-section">
                <hr />
                <h1 className="staff-title">Management Team</h1>
                <hr />
                <div className="staff-wrap">
                    <div className="staff-image">
                        <img src={Ryan} alt="Ryan Petakoff Headshot" />
                    </div>
                    <div className="staff-information">
                        <h2>Ryan Petakoff</h2>
                        <h3>President and Owner</h3>
                        <p>
                            Ryan began his career in 2010 as a valet attendant while studying biochemistry at Cal State
                            Fullerton, advancing to the management team by 2013. Through relentless dedication and
                            hands-on experience, he partnered with Mark Ramirez to take ownership of the company in
                            2023, continuing the legacy of mentorship and excellence established by founder David Allen.
                        </p>
                        <p>
                            As President, Ryan oversees all day-to-day operations, sales, and event management, ensuring
                            the company remains true to its ethos: “Only the best…for the best.” His journey—from valet
                            attendant to executive leadership—demonstrates a deep mastery of the industry and an
                            unwavering commitment to excellence. Under his leadership, the team delivers exceptional
                            precision and care for every event, reinforcing Premiere Valet Services' position as
                            Southern California's premier valet service provider.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="staff-wrap">
                    <div className="staff-image">
                        <img src={Mark} alt="Mark Ramirez Headshot" />
                    </div>
                    <div className="staff-information">
                        <h2>Mark Ramirez</h2>
                        <h3>CFO and Owner</h3>
                        <p>
                            Mark brings over three decades of experience in the valet industry to his role as CFO and
                            co-owner of Premiere Valet Services, Inc. He began his career in 1998 as a valet attendant
                            while studying at Pepperdine University in Malibu. Within just one year, he advanced to the
                            management team as Controller, showcasing his exceptional financial acumen and unwavering
                            dedication.
                        </p>
                        <p>
                            In 2023, Mark became co-owner of the company alongside Ryan, further reinforcing his
                            commitment to its continued success and growth. As CFO, he oversees all financial
                            operations, ensuring fiscal discipline while driving strategic initiatives. Combining
                            high-level oversight with hands-on expertise, he actively manages high-profile events,
                            demonstrating his deep understanding of both financial and operational systems.
                        </p>
                        <p>
                            From his early days as a valet attendant to his current leadership role, Mark's relentless
                            focus on quality and efficiency has been a cornerstone of the company's success. Under his
                            guidance, Premiere Valet continues to excel as Southern California's trusted valet partner,
                            delivering service rooted in decades of industry expertise.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="staff-wrap">
                    <div className="staff-image">
                        <img src={Joel} alt="Joel Ocampo Headshot" />
                    </div>
                    <div className="staff-information">
                        <h2>Joel Ocampo</h2>
                        <h3>Director of Operations</h3>
                        <p>
                            Joel brings over 26 years of experience in institutional banking and financial consulting to
                            his role as Director of Operations at Premiere Valet Services, Inc. Before joining Premiere
                            Valet, he specialized in delivering technological solutions to streamline financial
                            reporting and optimize daily operations for his clients. A proud graduate of San Diego State
                            University, home of the Aztecs, Joel's diverse background equips him with a unique
                            perspective on efficiency and client service.
                        </p>
                        <p>
                            Joel began his journey with Premiere Valet Services in 2018 as a valet attendant, quickly
                            advancing to Operations Manager in 2021 and assuming the role of Director of Operations in
                            2024. His leadership is pivotal to field operations and client relations, ensuring
                            consistent execution and service delivery.
                        </p>
                        <p>
                            With a focus on operational excellence and client satisfaction, Joel plays a critical role
                            in upholding the company's reputation as Southern California's trusted valet partner. His
                            extensive experience and commitment to innovation make him an indispensable part of the PVS
                            leadership team.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="staff-wrap">
                    <div className="staff-information">
                        <h2>Warren Gordon</h2>
                        <h3>Scheduling Manager</h3>
                        <p>
                            Warren Gordon serves as Scheduling Manager at Premiere Valet Services, Inc., a role he
                            assumed in 2024. Since joining the company in 2019, Warren quickly rose through the ranks,
                            starting as a valet attendant and advancing to Valet Supervisor. His previous experience
                            includes supervising events ranging from intimate gatherings of 25 guests to large-scale
                            events with over 1,000 attendees. Warren's portfolio includes providing valet services for
                            NFL teams, major movie studios, and world-renowned celebrities.
                        </p>
                        <p>
                            Warren's extensive field experience has equipped him with valuable insight into event
                            logistics and personnel management. He now channels this expertise into overseeing the
                            scheduling of over 200 employees, ensuring efficient and reliable coverage for every client
                            and event. His dedication to precision and organization ensures Premiere Valet Services
                            continues to deliver the high-caliber service clients have come to expect.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff;
