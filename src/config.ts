// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'pb967se9gf'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'kincheung.us.auth0.com',            // Auth0 domain
  clientId: 'F4fKEyTNsKDzMVi8fVOX9BhSh6uNQumT',          // Auth0 client id
  callbackUrl: 'http://d6aq5bif8acpi.cloudfront.net/callback'
}
