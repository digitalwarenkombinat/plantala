import manifesto from 'manifesto.js';

const url = 'https://app.digitale-sammlungen.de/demo/iiif/presentation/v2/collection/kba';

async function getManifestData(manifests) {
  try {
    const manifestData = manifests.map(async (manifest) => {
      const loadManifest = await manifesto.loadManifest(manifest.id);
      const parsedManifest = manifesto.parseManifest(loadManifest);
      return {
        name: manifest.getLabel().getValue(),
        source: parsedManifest.getSequenceByIndex(0).getCanvasByIndex(0).getImages()[0].getResource().id,
        description: parsedManifest.getDescription().getValue(),
        link: parsedManifest.getRelated(),
        wiki: manifest.id,
      };
    });

    return await Promise.all(manifestData);
  } catch (err) {
    console.log(err);
  }
}

export async function processIIIFData() {
  const manifestResource = await manifesto.loadManifest(url);
  const iiifResource = manifesto.parseManifest(manifestResource);

  if (iiifResource.isCollection()) {
    const manifests = iiifResource.getManifests();
    const iiifData = await getManifestData(manifests);
    console.log(iiifData);
  }
}

processIIIFData();
