import React from "react";

import {
    Modal,
    Form,
    FormField,
    SubmitButton,
    RadioButton,
    SelectOption,
} from "components";
import { actions } from "./duck";

const Home = () => (
    <div>
        <h3>Home</h3>
        <Modal
            title="Open Modal"
            description="This property is used for a subtitle."
            body={ (
                <Form
                    form="exampleForm"
                    onSubmit={ actions.submit }
                    initialValues={ {
                        name: "Tom de Wildt",
                        email: "tomdewildt@ziggo.nl",
                        password: "Test1234",
                        message: "Lorem Ipsum...",
                        type: "3",
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
                        <SelectOption name="Option 1" value="1" />
                        <SelectOption name="Option 2" value="2" />
                        <SelectOption name="Option 3" value="3" />
                    </FormField>
                    <FormField name="gender" type="radio" label="Gender">
                        <RadioButton name="gender" value="male" />
                        <RadioButton name="gender" value="female" />
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
