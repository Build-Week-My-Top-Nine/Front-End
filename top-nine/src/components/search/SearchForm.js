import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Button } from 'reactstrap';
import axios from 'axios';
import WelcomePage from '../WelcomePage'



function SearchForm(props) {

  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  console.log(props)

  useEffect((props) => {
    axios.get("https://mytopnineapi.herokuapp.com/api/topnine").then(res => {
      console.log(res.data, "PROP IN SEARCH");
      // setSearchValue(res.data);
      setItems(res.data);
      setFilteredItems(res.data);
    });
  }, []);

  function handleChange(e) {
    const newItems = items.filter((item) => { 
      console.log(item, "Item")
     return item.TopNineItem.toLowerCase().includes(e.target.value)
    })
    setFilteredItems(newItems);
  }
  
  return (
    <>
        <Form className="searchform">
            <Field type="text" name="search" placeholder="Search..." className="search-field" onChange={handleChange} />
            <Button className="def-button">Search</Button>
        </Form>
        {filteredItems.map((item) => (<p className="searchitems">{item.TopNineItem}</p>))}
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