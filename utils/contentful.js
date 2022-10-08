const contentful = require("contentful");

export default class Contentful {
  constructor() {
    this.client = contentful.createClient({
      // space: process.env.CONTENTFUL_SPACE_ID,
      // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      space: "121t90qn9wcg",
      accessToken: "N6iYAasFbal1TKrH5NhVFP8j1wAue2CN6H6X8F70hX4",
    });
  }

  testClient() {
    console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
    console.log(process.env.CONTENTFUL_SPACE_ID);
  }

  async getAllPaths() {
    const collection = await this.client.getEntries({
      content_type: "kundreferens",
    });
    return collection.items.map((entry) => ({
      params: {
        referens: entry.fields.slug,
      },
    }));
  }

  async getReferral(omrade) {
    const collection = await this.client.getEntries({
      content_type: "kundreferens",
    });
    const referens = collection.items.find(
      (entry) => entry.fields.slug === omrade
    );
    if (!referens) {
      // throw new Error(`Could not find any entries using slug ${omrade}`);
    } else {
      const {
        addons,
        address,
        comment,
        description,
        energy,
        images,
        installedPanels,
        manufacturer,
        slug,
        thumbnail,
      } = referens.fields;
      return {
        addons,
        address,
        comment,
        description,
        energy,
        images,
        installedPanels,
        manufacturer,
        slug,
        thumbnail,
      };
    }
  }

  async getAllReferrals() {
    const collection = await this.client.getEntries({
      content_type: "kundreferens",
    });
    return collection.items.map((entry) => {
      const {
        addons,
        address,
        comment,
        description,
        energy,
        images,
        installedPanels,
        manufacturer,
        slug,
        thumbnail,
      } = entry.fields;
      return {
        addons,
        address,
        comment,
        description,
        energy,
        images,
        installedPanels,
        manufacturer,
        slug,
        thumbnail,
      };
    });
  }
}