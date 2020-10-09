import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { About } from './About';
import { Tagline } from './Tagline';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="row justify-content-center">
            <Tagline />
                    <About />
                </div>;
    }
}
