import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

function home() {
  return (
    <Container>
          <Section
            title="Model S"
            description="Order Online for Touchless Delievery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
          <Section1
                      title="Model Y"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-y.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            />
      <Section2
                      title="Model 3"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-3.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            />
                  <Section3
                        title="Model X"
                        description="Order Online for Touchless Delievery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
              />
       
    </Container>
  )
}

export default home
const Container =styled.div`
  height: 100vh;
  `