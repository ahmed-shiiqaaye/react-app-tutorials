import {Button} from './components/Button.style'
import {AppContainer } from './components/Container.style'
import { NavHeader , Logo } from './components/Header.style'
import { Flex } from './components/Flex.style'
import { Hero , HeroContainer } from './components/Hero.style'
// ----------
import Index from './App.css'



function App() {
  return (
    <>
      <NavHeader bg="dodgerblue">
        < AppContainer>
          <Flex>
            <div>
            <Logo src="./img/Logo.png"></Logo>
            </div>
            <Button bg="" color='black'>Sign up</Button>
          </Flex>
        </AppContainer>
      </NavHeader>

          <HeroContainer>
         <Hero>
                <div>
                  <h1>Build your website grow your  bussiness</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores saepe fugiat quisquam placeat optio quasi, libero est odio id quia in, illum, nam quo perspiciatis dolorem iure numquam reprehenderit molestiae.</p>
                  <Button bg="dodgerblue" color='white'>Get Started</Button>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1650619540877-e13d27064f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                </div>
          </Hero>
          </HeroContainer>
    </>
  );
}

export default App;
