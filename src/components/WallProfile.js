import React from 'react';
import Face from '../assets/Face.png';
import Call from '../assets/Call.svg';
import Mail from '../assets/Mail.svg';
import Location from '../assets/Location.svg';
import BioItems from './BioItems';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Posts from './Posts';

function WallProfile() {

    return (
        <div className="container my-5">
            <div className="row profileBar">
                <div className="col-3">
                    <img src={Face} width="224"/>
                </div>
                <div className="col-9">
                    <h2>John Doe</h2>
                    <h3>Scelerisque sem phasellus et egestas nibh.</h3>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-3 col-12">
                    <div className="bioCol">
                    <h4>Bio</h4>
                    <div>
                        <BioItems icon={Call} text={"+91-999999999"}/>
                        <BioItems icon={Mail} text={"johndoe@example.com"}/>
                        <BioItems icon={Location} text={"Virginia, USA"}/>
                    </div>
                    </div>
                </div>
                <div className="col-lg-9 col-12">
                    <div className="wallCol">
                    <h4 className="mb-4">Posts</h4>
                <Tabs>
                    <TabList>
                        <Tab>Active</Tab>
                        <Tab>Archive</Tab>
                    </TabList>

                    <TabPanel>
                        <Posts title={"Job Title Active"}/>
                        <Posts title={"Job Title Active"}/>
                        <Posts title={"Job Title Active"}/>
                        <Posts title={"Job Title Active"}/>
                        <Posts title={"Job Title Active"}/>
                    </TabPanel>
                    <TabPanel>
                        <Posts title={"Job Title Archive"}/>
                        <Posts title={"Job Title Archive"}/>
                        <Posts title={"Job Title Archive"}/>
                        <Posts title={"Job Title Archive"}/>
                        <Posts title={"Job Title Archive"}/>
                    </TabPanel>
                </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WallProfile;