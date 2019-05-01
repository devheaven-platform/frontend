import React from "react";

import { Page } from "components";

const PageHome = () => (
    <Page>
        <Page.Header title="Home" subtitle="Subtitle" />
        <Page.Content>
                   Content
        </Page.Content>
        <Page.Footer>
            <p>
                { `Copyright © ${ new Date().getFullYear() } Garden.io`}
            </p>
        </Page.Footer>
    </Page>
);

export default PageHome;
