import * as React from 'react';

export class About extends React.Component<{}, {}> {
    public render() {
        return <div id="about" className="bodyPage col-md-7 center-block" style={{ float: "none" }}>
            <h1>What's this site?</h1>
            <hr />
            <p>
                It's Deinyon's website! Pronounced like <i>Cayenne</i> &#x1f336;&#xFE0F;, but starting with "dein". Also known as <i>ddoodm</i> across the net.
                    </p>
            <p>
                I'm trying to re-imagine my old website
                        (<a href="https://ddoodm.com/" target="_blank">ddoodm.com</a>) as a React app...
                        But it's taken over a year for me to be bothered to get this far! lol
                    </p>
            <p>
                Check out my <a href="https://ddoodm.com/" target="_blank">old website</a>,&nbsp;
                <a href="https://github.com/ddoodm" target="_blank">GitHub</a>,&nbsp;
                <a href="https://youtube.com/ddoodm" target="_blank">YouTube</a> and&nbsp;
                <a href="https://blog.deinyon.com/" target="_blank">blog</a>
                    </p>
        </div>;
    }
}
