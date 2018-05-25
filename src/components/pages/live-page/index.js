// @flow

import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { css } from 'emotion'
import PageBody from '../../common/page_body'

const Button = styled.button`
    margin-right: 20px;
`

class LivePage extends React.Component<Object, Object> {

    props: {
        data: Object,
    }

    state: {
        paragraphs: Array<string>,
        loading: boolean,
        error: ?string,
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            paragraphs: [],
            loading: false,
            error: null,
        }
    }

    loadData = () => {
        this.setState({ error: null, loading: true, paragraphs: [] });

        fetch("https://baconipsum.com/api/?type=meat-and-filler").then(response => response.json()).then(json => this.setState({ paragraphs: json, loading: false }) ).catch(error => this.setState({ error: error, loading: false }) );
    }

    clearData = () => {
        this.setState({ paragraphs: [] });
    }
    
    render() {
        const { data } = this.props;
        return (
            <PageBody>
                { !data.loading ? 
                    <Fragment>
                        <h1>{data.page.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: data.page.body.childMarkdownRemark.html }}/>
                    </Fragment>
                : null }

                <Button onClick={this.loadData}>Load me some Bacon Ipsum</Button>
                <Button onClick={this.clearData}>Clear</Button>
                <div css={{ marginTop: 20 }}>
                    {this.state.error ? <p style={{ color: "red" }}>{this.state.error}</p> : null}
                    {this.state.loading ? <p style={{ textAlign: "center" }}>Loading...</p> : null}
                    {this.state.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
            </PageBody>
        );
    }
}

export default LivePage

// $FlowFixMe
export const pageQuery = graphql`
  query LivePageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`