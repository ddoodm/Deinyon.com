import * as React from 'react';
import { DeinyonHeader } from './DeinyonHeader';
import { FileRepo } from './FileRepo';
import { RouteComponentProps } from 'react-router';

export class FileRepoWrapper extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="row justify-content-center">
                <div id="tagline">
                    <DeinyonHeader />
                </div>
                <FileRepo />
            </div>;
    }
}
