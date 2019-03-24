import React from "react";

import {
    Modal,
    Form,
    FormField,
    SubmitButton,
} from "components";

const Home = () => (
    <div>
        <h3>Home</h3>
        <Modal
            title="Open Modal"
            description="This property is used for a subtitle."
            body={ (
                <Form
                    form="exampleForm"
                    onSubmit={ () => console.log( "Test" ) }
                    initialValues={ {
                        name: "Tom de Wildt",
                        email: "tomdewildt@ziggo.nl",
                        password: "Test1234",
                        message: "Lorem Ipsum...",
                        gender: "male",
                        terms: true,
                    } }
                    enableSubmitButton
                    enableResetButton
                >
                    <FormField name="name" type="text" label="Name" placeholder="John Doe" />
                    <FormField name="email" type="email" label="Email" placeholder="john@email.com" />
                    <FormField name="password" type="password" label="Password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" />
                    <FormField name="message" type="textarea" label="Message" placeholder="This is a request for ..." />
                    <FormField name="type" type="select" label="Type">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </FormField>
                    <FormField name="gender" type="radio" label="Gender">
                        <div>Test</div>
                    </FormField>
                    <FormField name="terms" type="checkbox" label="Accept terms?" />
                </Form>
            ) }
            footer={
                <SubmitButton form="exampleForm">Create</SubmitButton>
            }
            enableCancelButton
        />
    </div>
);

export default Home;
