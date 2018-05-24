import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import PageBody from '../../common/page_body'

const Field = styled.div`
  margin-bottom: 20px;
  margin-left: 24px;
  margin-right: 24px;
  width: 50%;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }

  label {
    font-size: 16px;
    width: 100%;
  }

  input, textarea {
    padding: 5px;
    width: 100%;
    max-width: 500px;
    height: 40px;
    font-family: Helvetica, sans-serif;
    margin: 0px 0px 10px 0px;
    border: 1px solid #ccc;
    display: block;

    &:focus {
      box-shadow: -8px 0px 35px -14px rgba(0,0,0,0.64);
      border-color: #
    }
  }

  textarea {
    height: 90px;
  }
`;

const Button = styled.button`
`;

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({ success: true }))
      .catch(error => alert(error));
  };

  render() {
    const { data } = this.props;

    return (
      <PageBody>
        { !data.loading ? 
            <Fragment>
                <h1>{data.page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.page.body.childMarkdownRemark.html }}/>

                {!this.state.success ?
                  <form 
                    name="contact"
                    method="post"
                    action="/contact/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}>
                      <p hidden>
                        <label>
                          Don’t fill this out: <input name="bot-field" />
                        </label>
                      </p>
                      <Field>
                        <label>Name: <input type="text" name="name" onChange={this.handleChange}/></label>
                      </Field>
                      <Field>
                        <label>Email: <input type="email" name="email" onChange={this.handleChange}/></label>
                      </Field>
                      <Field>          
                        <label>Message: <textarea name="message" onChange={this.handleChange}></textarea></label>
                      </Field>
        
                      <Button type="submit">Send</Button>
                  </form>
                : 
                  <h2>Thank you for contacting me. I'll be in touch soon.</h2>
                }
            </Fragment>
        : null }
      </PageBody>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      callout {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`