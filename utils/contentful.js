const contentful = require("contentful");

export default class Contentful {
  constructor() {
    this.client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
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

  async getOmOssPage() {
    const collection = await this.client.getEntry("1EPrw9mLkHTaWAQ8ikFxN9");
    return collection;
  }

  async getReferralPage() {
    const collection = await this.client.getEntry("2EDcmaG932hG4DQrPgcbyT");
    return collection;
  }

  async getHomePage() {
    const collection = await this.client.getEntry("5Z9AffKULq0y5vKA2SGME0");
    return collection;
  }

  async getPageInfo() {
    const collection = await this.client.getEntry("4KJt0jSITroyEPb8ozYZBT");
    return collection;
  }
}
