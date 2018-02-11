import React, { Component } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { Formik } from 'formik';

class PlaceCreate extends Component {
  render() {
    return (
      <Container>
        <h1>{'Create A New Place'}</h1>

        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={values => {
            // same as above, but feel free to move this into a class method now.
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(
            values,
            { setSubmitting, setErrors /* setValues and other goodies */ }
          ) => {
            console.log('setSubmitting', setSubmitting);
            console.log('setErrors', setErrors);
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            // <form onSubmit={handleSubmit}>
            //   <input
            //     type="email"
            //     name="email"
            //     onChange={handleChange}
            //     onBlur={handleBlur}
            //     value={values.email}
            //   />
            //   {touched.email && errors.email && <div>{errors.email}</div>}
            //   <input
            //     type="password"
            //     name="password"
            //     onChange={handleChange}
            //     onBlur={handleBlur}
            //     value={values.password}
            //   />
            //   {touched.password &&
            //     errors.password && <div>{errors.password}</div>}
            //   <button type="submit" disabled={isSubmitting}>
            //     Submit
            //   </button>
            // </form>

            <Form onSubmit={this.handleSignIn}>
              <FormGroup>
                <Label for="name">Place Name</Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="Bob's Pizza"
                  type="text"
                />
              </FormGroup>

              <h4>Location</h4>

              <FormGroup>
                <Label for="address1">Address</Label>
                <Input
                  name="address1"
                  id="address1"
                  placeholder="123 Abc St"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Input
                  name="address2"
                  id="address2"
                  placeholder="Ste 123"
                  type="text"
                />
              </FormGroup>

              <FormGroup row>
                <Col md="6">
                  <Label for="city">City</Label>
                  <Input
                    name="city"
                    id="city"
                    placeholder="Los Angeles"
                    type="text"
                  />
                </Col>

                <Col md="3">
                  <Label for="state">State</Label>
                  <Input name="state" id="state" placeholder="CA" type="text" />
                </Col>

                <Col md="3">
                  <Label for="zip">ZIP</Label>
                  <Input name="zip" id="zip" placeholder="12345" type="text" />
                </Col>
              </FormGroup>

              <h4>Details</h4>

              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  name="phone"
                  id="phone"
                  placeholder="(123) 123-1234"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Label for="website">Website</Label>
                <Input
                  name="website"
                  id="website"
                  placeholder="https://1234.com"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Label for="yelp">Yelp Link</Label>
                <Input
                  name="yelp"
                  id="yelp"
                  placeholder="https://yelp.com/biz/somelink"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Label for="tags">Tags</Label>
                <Input name="tags" id="tags" placeholder="12345" type="text" />
              </FormGroup>

              <Button color="primary">{'Create Place'}</Button>
            </Form>
          )}
        />
      </Container>
    );
  }
}

export default PlaceCreate;
