import React from 'react'
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";

function Contact() {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <center className="h3 pt-3">Contact List</center>
          <div className="row">
            <div className="col-md-6 my-3">
              <AddContact/>
            </div>
            <div className="col-md-6 my-3">
              <ContactList/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact