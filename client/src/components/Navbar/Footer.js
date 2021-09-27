import React from 'react'
import { Button, Menu, Divider, List, Segment, Container, Grid, Header, Image } from 'semantic-ui-react'

const footer = () => {
    return (
        <div>
            <Segment inverted vertical style={{ margin: '20em 0em 0em', padding: '3em 0em' }}>
  <Container textAlign='center'>
    <Grid divided inverted stackable>
    
      
      
      
      <Grid.Column width={4} >
        <Header inverted as='h2' content='THIS WEB SITE ' />
        <p>
         Was created by Ousasama elkadhi and Mohamed chairat
        </p>
      </Grid.Column>
    </Grid>

    <Divider inverted section />
    <List horizontal inverted divided link size='small'>
      <List.Item as='a' href='#'>
        Site Map
      </List.Item>
      <List.Item as='a' href='#'>
        Contact Us
      </List.Item>
      <List.Item as='a' href='#'>
        Terms and Conditions
      </List.Item>
      <List.Item as='a' href='#'>
        Privacy Policy
      </List.Item>
    </List>
  </Container>
</Segment>
        </div>
    )
}

export default footer
