import * as React from 'react';

export class LensParticles extends React.Component<{}, {}> {
    public render() {
        let particles: JSX.Element[] = [];

        for(let i = 0; i <= 255; i++)
            particles.push(<div key={i} className="particle"></div>);

        return <div id="particles">
                    {particles}
                </div>
    } 
} 