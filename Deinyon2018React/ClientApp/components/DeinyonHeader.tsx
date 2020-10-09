import * as React from 'react';
import { Link } from 'react-router-dom';

export class DeinyonHeader extends React.Component<{}, {}> {
    public render() {
        return <div>
            <h1><Link to="/">Deinyon Davies</Link></h1>
            <p>Just some dude on the Intertubes</p>
        </div>;
    }
}
