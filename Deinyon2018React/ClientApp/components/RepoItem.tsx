import * as React from "react";

interface Props {
    name: string;
    path: string;
}

export class RepoItem<TProps extends Props, TState> extends React.Component<TProps, TState> {
    render() {
        return <div>
            {this.props.name}
        </div>;
    }
}
