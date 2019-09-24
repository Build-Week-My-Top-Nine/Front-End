import React  from 'react';
import { Form, Field, withFormik } from 'formik';
import { Button } from 'reactstrap';



function SearchForm() {
    return (
        <>
        <Form className="searchform">
            <Field type="text" name="search" placeholder="Search..." className="search-field" />
            <Button className="search-button">Search</Button>
        </Form>
        </>
    );
}

export default withFormik({
    myPropsToValues: (values) => {
        return {
            search: values.search || ''
        }
    }
})(SearchForm)