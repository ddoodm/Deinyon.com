import * as React from "react";

import { Link } from "react-router-dom";

import { RepoItem } from "./RepoItem";

export interface DirectoryItemProps {
    name: string;
    path: string;
}

interface DirectoryItemState {

}

export class DirectoryItem extends RepoItem<DirectoryItemProps, DirectoryItemState> {
    render() {
        return <div>
            <Link to={`/repo/${this.props.path}`}>
                {this.props.name}
            </Link>
        </div>;
    }
}
