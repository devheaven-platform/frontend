import React from "react";

import { Page } from "components";

const PageProject = () => (
    <Page>
        <Page.Header title="Project" subtitle="Subtitle" />
        <Page.Content>
                Content
        </Page.Content>
        <Page.Footer>
            <p>
                { `Copyright © ${ new Date().getFullYear() } Devheaven.nl`}
            </p>
        </Page.Footer>
    </Page>
);

export default PageProject;
