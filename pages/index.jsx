import { Button, Text, Grid } from '@geist-ui/react'

export default function Home() {

  function autoAdjust({ width }) {
    const gridWidth = 24
    const result = width - gridWidth
    return result
  }

  const widths = {
    md: 18
  }

  return (
    <Grid.Container justify="center" alignItems="center" my={4}>
      <Grid xs={24} md={widths.md}>
        <Text h1>Bem-vindo ao mundo do Next.JS!</Text>
      </Grid>
      <Grid xs={24} md={widths.md}>
        <p>
          Somos um grupo brasileiro de Telegram dedicado ao aprendizado e evolução em Next.JS, uma framework de React para construção de sites da Vercel.
        </p>
      </Grid>
      <Grid xs={24}>
        <Grid.Container gap={2} justify="center" mt={1}>
          <Grid>
            <Button auto type="success">Quero fazer parte</Button>
          </Grid>
          <Grid>
            <Button auto >Saiba Mais</Button>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  )
}