import React, { Component } from 'react'

class Contact extends Component {





  render () {
    return (
      <div class='content'>
        <h1>Contact iPaws</h1>

      <div className="contact-form">
      <form>
        <label><li> Name </li></label>
          <p>
            <input type="text" />
              </p>
              <label><li> Email </li></label>
              <p>
                <input type="text" />
                </p>
                <label className='telephone'><li> Telephone # </li></label>
                <p>
                  <input type="text" />
                    </p>
                    <label><li>Message</li></label>
                    <p>
                      <input type="text" />
                      </p>
                      <label><li> Address/Location </li></label>
                      <p>
                        <input type="text" />
                          </p>
                           <input type="submit" />

              </form>
            </div>
          </div>
    )
  }
}

export default Contact
