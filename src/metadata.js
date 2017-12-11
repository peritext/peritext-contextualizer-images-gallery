export default {
  type: 'peritext-contextualizer',
  id: 'images-gallery',
  name: 'Image gallery display',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true,
  },
  model: {
    acceptedResourceTypes: [{type: 'images-group'}],
    block: {
      expandable: false,
      options: []
    }
  }
}