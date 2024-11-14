{
  "template": `
    <Frame>
      <Page>
        <ActionBar title="Jetaime Shopping" />
        <GridLayout>
          <Label text="Welcome to Jetaime Shopping!" class="h1 text-center" />
        </GridLayout>
      </Page>
    </Frame>
  `,
  "script": `
    export default {
      name: 'App'
    }
  `,
  "style": `
    .h1 {
      font-size: 24;
      margin: 20;
    }
    .text-center {
      text-align: center;
    }
  `
}