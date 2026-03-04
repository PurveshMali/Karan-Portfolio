import React from 'react';
import { Users, Zap, MessageSquare } from 'lucide-react';

const Community = () => {
    return (
        <section id="community" className="community">
            <div className="community-container">
                <div className="community-bg-glow"></div>
                <div className="community-content">
                    <h2><span>Join</span> The Crew</h2>
                    <p className="community-desc">
                        Connect with fellow gearheads, share your builds, and discuss the latest in automotive culture. This is our dedicated space for the automobile community.
                    </p>

                    <div className="community-features">
                        <div className="feature">
                            <Users className="feature-icon" />
                            <h4>Connect</h4>
                            <p>Meet enthusiasts worldwide</p>
                        </div>
                        <div className="feature">
                            <Zap className="feature-icon" />
                            <h4>Share</h4>
                            <p>Showcase builds & photos</p>
                        </div>
                        <div className="feature">
                            <MessageSquare className="feature-icon" />
                            <h4>Discuss</h4>
                            <p>Talk parts, tuning & events</p>
                        </div>
                    </div>

                    <button className="btn btn-primary community-cta">
                        Join the Discord
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Community;
