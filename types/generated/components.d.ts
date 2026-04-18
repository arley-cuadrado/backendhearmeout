import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesGallery extends Struct.ComponentSchema {
  collectionName: 'components_features_galleries';
  info: {
    displayName: 'gallery';
    icon: 'landscape';
  };
  attributes: {
    images: Schema.Attribute.Media<'images'>;
  };
}

export interface FeaturesMasonryGallery extends Struct.ComponentSchema {
  collectionName: 'components_features_masonry_galleries';
  info: {
    displayName: 'masonryGallery';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface FeaturesQuote extends Struct.ComponentSchema {
  collectionName: 'components_features_quotes';
  info: {
    displayName: 'quote';
    icon: 'quote';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images'>;
    phrase: Schema.Attribute.Blocks;
  };
}

export interface FeaturesRichText extends Struct.ComponentSchema {
  collectionName: 'components_features_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'medium';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface FeaturesSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_features_social_medias';
  info: {
    displayName: 'socialMedia';
    icon: 'emotionHappy';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    tiktok: Schema.Attribute.String;
    x: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface FeaturesSocialNetwork extends Struct.ComponentSchema {
  collectionName: 'components_features_social_networks';
  info: {
    displayName: 'socialNetwork';
  };
  attributes: {
    platform: Schema.Attribute.Text & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeaturesSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_features_spoilers';
  info: {
    displayName: 'spoiler';
  };
  attributes: {
    actualSpoiler: Schema.Attribute.Text;
    clickableText: Schema.Attribute.String;
  };
}

export interface FeaturesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'archive';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text;
  };
}

export interface FeaturesTour extends Struct.ComponentSchema {
  collectionName: 'components_features_tours';
  info: {
    displayName: 'tour';
    icon: 'bulletList';
  };
  attributes: {
    buy: Schema.Attribute.String;
    city: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    venue: Schema.Attribute.String;
  };
}

export interface FeaturesTourList extends Struct.ComponentSchema {
  collectionName: 'components_features_tour_lists';
  info: {
    displayName: 'tourList';
    icon: 'bulletList';
  };
  attributes: {
    buy: Schema.Attribute.String;
    city: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    venue: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.gallery': FeaturesGallery;
      'features.masonry-gallery': FeaturesMasonryGallery;
      'features.quote': FeaturesQuote;
      'features.rich-text': FeaturesRichText;
      'features.social-media': FeaturesSocialMedia;
      'features.social-network': FeaturesSocialNetwork;
      'features.spoiler': FeaturesSpoiler;
      'features.testimonial': FeaturesTestimonial;
      'features.tour': FeaturesTour;
      'features.tour-list': FeaturesTourList;
    }
  }
}
