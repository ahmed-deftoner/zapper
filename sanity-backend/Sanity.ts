import sanityClient, { ClientConfig } from '@sanity/client'
import sanityImage from '@sanity/imagetool'

const options: ClientConfig = {
  dataset: 'production',
  projectId: '4xr89bmp',
  useCdn: true,
  useProjectHostname: true,
}

const client = sanityClient(options)

export const imageBuilder = sanityImage(client)

export default client