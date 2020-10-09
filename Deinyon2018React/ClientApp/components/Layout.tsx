import * as React from 'react';
import { LensParticles } from './LensParticles';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div id="head">
            <LensParticles />
            <div id="headContent">
                <div id="body" className="container">
                    {this.props.children}
                </div>
                <div id="footer">
                    <p>&copy; {new Date().getFullYear()} Deinyon Davies</p>
                </div>
            </div>
        </div>;
    }
}
