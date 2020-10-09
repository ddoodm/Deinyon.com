import * as React from 'react';
import { DeinyonHeader } from './DeinyonHeader';

export class Tagline extends React.Component<{}, {}> {
    public render() {
        return <div id="tagline">
            <DeinyonHeader />

            <div id="avatar">
                <a href="images/avatar-big.jpg">
                    <img alt="avatar" src="images/avatar.jpg" />
                </a>
            </div>

            <hr />
        </div>;
    }
}
