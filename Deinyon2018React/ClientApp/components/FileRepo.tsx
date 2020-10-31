import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    match,
    RouteComponentProps
} from "react-router-dom";

import * as ParsePath from "path-parse";
import * as Path from "path";

interface FileRepoState {
    path: string;
    listing?: RepoListing;
}

interface FileRepoProps {

}

interface RepoListing {
    directories: RepoDirectory[];
    files: RepoFile[];
}

interface RepoItem {
    name: string;
    path: string;
}

interface RepoDirectory extends RepoItem {

}

interface RepoFile extends RepoItem {

}

// https://stackoverflow.com/a/48138690/2503269
interface RepoPageMatchParams {
    path: string;
}
interface RepoPageProps extends RouteComponentProps<RepoPageMatchParams> {

}
interface RepoPageState {
    path: string;
    listing?: RepoListing;
}
export class RepoPage extends React.Component<RepoPageProps, RepoPageState> {
    public constructor(props?: RepoPageProps) {
        super(props);
        this.state = {
            path: this.pathFromRoute
        };
    }

    public render() {
        console.log(this.state.listing);
        if (!this.state.listing) {
            return this.renderLoading();
        } else {
            return this.renderListing();
        }
    }

    private renderLoading() {
        return <div>
            <h2>Loading ...</h2>
        </div>
    }

    private renderListing() {
        if (!this.state.listing) {
            throw new Error("Null listing in state");
        }

        return <div>
            <h2>Index of {this.state.path}</h2>
            <br />
            <div>
                {this.state.path !== "/" &&
                    <Link to={`/repo/${this.state.path}/../`}>... Back</Link>
                }
                <p>Directories</p>
                <ul>
                    {this.state.listing.directories.map(dir =>
                        <li>
                            <Link to={`/repo/${dir.path}`}>{dir.name}</Link>
                        </li>
                    )}
                </ul>
                <p>Files</p>
                <ul>
                    {this.state.listing.files.map(file =>
                        <li>{file.name}</li>
                    )}
                </ul>
            </div>
        </div>
    }

    componentDidMount() {
        const path = Path.normalize(this.pathFromRoute);

        if (!!path) {
            // Store the path from the route props into state
            this.setState({ path: path });
            this.loadDirectoryListing(path);
        }
    }

    componentDidUpdate(prevProps: RepoPageProps, prevState: RepoPageState) {
        let path = Path.normalize("./" + this.pathFromRoute);

        if (path === ".") {
            path = "/";
        }

        // If the path is different, re-load directory listing
        if (this.state.path !== path) {
            console.log("d> UPDATING");
            console.log("d> MATCH:" + this.pathFromRoute);
            console.log("d> PATH: " + path);

            // Also reset the listing
            this.setState({ path: path, listing: undefined });
            this.loadDirectoryListing(path);
        }
    }

    loadDirectoryListing(path: string) {
        fetch(`api/repo?path=${path}`)
            .then(response => response.json() as Promise<RepoListing>)
            .then(listing => {
                console.log("LOADED LISTING")
                this.setState({ listing: listing });
            });
    }

    private get pathFromRoute() {
        return this.props.match.params.path || "/";
    }
}

export class FileRepo extends React.Component<FileRepoProps, FileRepoState> {
    public render() { 
        return <div id="fileRepo" className="bodyPage col-md-7 center-block" style={{float: "none"}}>
                <h1>File Repository <Link to="/">home</Link></h1>
                <hr />
            <Router>
                <Switch>
                    <Route path="/repo/:path+" component={RepoPage} />
                    <Route path="/" component={RepoPage} />
                    </Switch>
                </Router>
        </div>;
    }
}
