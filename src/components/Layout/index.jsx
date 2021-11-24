import { Button, Grid, Page, Spacer } from "@geist-ui/react"
import Logo from '../../../public/next-br.svg'
import { BsLightbulbFill, BsLightbulb } from 'react-icons/bs'

export default function Layout({ children, colorMode, colorModeSwitch }) {
  return (
    <Page dotBackdrop w="72rem" >
      <Page.Header
        paddingTop={2}
      >
        <Grid.Container justify="space-between" alignItems="center">
          <Grid xs={20} sm={16} md={8} lg={6} xl={4}>
            <Logo />
          </Grid>
          
          <Grid>
            <Button
              onClick={colorModeSwitch}
              icon={colorMode === 'light' ? <BsLightbulb /> : <BsLightbulbFill />}
              auto
              scale={2 / 3}
            />
          </Grid>
        </Grid.Container>
      </Page.Header>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer>
        <Button>
          Faça parte você também.
        </Button>
      </Page.Footer>
    </Page>
  )
}