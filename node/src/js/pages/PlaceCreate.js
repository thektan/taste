import React, { Component, Fragment } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Row
} from 'reactstrap';
import { withFormik, Field } from 'formik';
import Title from '../components/Title';
import Yup from 'yup';

const StyledField = ({
  field: { name, value, onChange, onBlur },
  form: { touched, errors },
  ...props
}) => {
  return (
    <Fragment>
      <Input
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        valid={touched[name] && errors[name] ? false : undefined}
        placeholder={props.placeholder}
        type={props.type || 'text'}
      />

      {touched[name] &&
        errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
    </Fragment>
  );
};

const PlaceCreateFormRenderer = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleBlur,
  handleChange,
  isSubmitting
}) => (
  <Form onSubmit={handleSubmit}>
    <Row className="form-section">
      <Col md="3">
        <h5>Name</h5>
      </Col>

      <Col md="9">
        <FormGroup>
          <Field
            component={StyledField}
            name="name"
            placeholder="Bob's Pizza"
          />
        </FormGroup>
      </Col>
    </Row>

    <Row className="form-section">
      <Col md="3">
        <h5>Location</h5>
      </Col>

      <Col md="9">
        <FormGroup>
          <Label for="address1">Address</Label>

          <Field
            component={StyledField}
            name="address1"
            placeholder="123 Abc St"
          />
        </FormGroup>

        <FormGroup>
          <Field
            component={StyledField}
            name="address2"
            placeholder="Ste 123"
          />
        </FormGroup>

        <FormGroup row>
          <Col md="6">
            <Label for="city">City</Label>

            <Field
              component={StyledField}
              name="city"
              placeholder="Los Angeles"
            />
          </Col>

          <Col md="3">
            <Label for="state">State</Label>

            <Field component={StyledField} name="state" placeholder="CA" />
          </Col>

          <Col md="3">
            <Label for="zip">ZIP</Label>

            <Field component={StyledField} name="zip" placeholder="12345" />
          </Col>
        </FormGroup>
      </Col>
    </Row>

    <Row className="form-section">
      <Col md="3">
        <h5>Details</h5>
      </Col>

      <Col md="9">
        <FormGroup>
          <Label for="phone">Phone Number</Label>

          <Field
            component={StyledField}
            name="phone"
            placeholder="(123) 123-1234"
          />
        </FormGroup>

        <FormGroup>
          <Label for="website">Website</Label>

          <Field
            component={StyledField}
            name="website"
            placeholder="https://1234.com"
          />
        </FormGroup>

        <FormGroup>
          <Label for="yelp">Yelp Link</Label>

          <Field
            component={StyledField}
            name="yelp"
            placeholder="https://yelp.com/biz/somelink"
          />
        </FormGroup>

        <FormGroup>
          <Label for="categories">Tags</Label>

          <Field
            component={StyledField}
            name="categories"
            placeholder="pizza, burgers, ..."
          />
        </FormGroup>
      </Col>
    </Row>

    <Row className="form-section">
      <Col className="text-right" md={{ size: 9, offset: 3 }}>
        <Button color="link">{'Cancel'}</Button>{' '}
        <Button color="primary" disabled={isSubmitting} type="submit">
          {'Create Place'}
        </Button>
      </Col>
    </Row>
  </Form>
);

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Required'),
  address1: Yup.string().required('Required'),
  address2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  phoneNumber: Yup.string(),
  website: Yup.string().url(),
  yelp: Yup.string().url(),
  categories: Yup.string().required('At least 1 category is required')
});

const PlaceCreateForm = withFormik({
  mapPropsToValues({
    name,
    address1,
    address2,
    city,
    state,
    zip,
    phoneNumber,
    yelp,
    website,
    categories
  }) {
    return {
      name,
      address1,
      address2,
      city,
      state,
      zip,
      phoneNumber,
      yelp,
      website,
      categories
    };
  },
  validationSchema: VALIDATION_SCHEMA,
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log('PLEASE WORKSKDSDSDFDS!!');

    // Redirect to newly created place

    setTimeout(() => {
      resetForm();

      setSubmitting(false);
    }, 2000);
  }
})(PlaceCreateFormRenderer);

class PlaceCreate extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="8">
            <Title>{'Create A New Place'}</Title>

            <PlaceCreateForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PlaceCreate;
