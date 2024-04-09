import { SchemaUtils } from '@graphpolaris/shared/lib/schema/schema-utils';
import { SchemaFromBackend } from '../../schema';

export const movieSchemaRaw: SchemaFromBackend = {
  nodes: [
    {
      name: 'Movie',
      attributes: [
        {
          name: 'tagline',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'released',
          type: 'int',
        },
        {
          name: 'votes',
          type: 'int',
        },
      ],
    },
    {
      name: 'Person',
      attributes: [
        {
          name: 'born',
          type: 'int',
        },
        {
          name: 'name',
          type: 'string',
        },
      ],
    },
  ],
  edges: [
    {
      name: 'ACTED_IN',
      label: 'ACTED_IN',
      collection: 'ACTED_IN',
      from: 'Person',
      to: 'Movie',
      attributes: [
        {
          name: 'roles',
          type: 'string',
        },
      ],
    },
    {
      name: 'REVIEWED',
      label: 'REVIEWED',
      collection: 'REVIEWED',
      from: 'Person',
      to: 'Movie',
      attributes: [
        {
          name: 'summary',
          type: 'string',
        },
        {
          name: 'rating',
          type: 'int',
        },
      ],
    },
    {
      name: 'PRODUCED',
      label: 'PRODUCED',
      collection: 'PRODUCED',
      from: 'Person',
      to: 'Movie',
      attributes: [],
    },
    {
      name: 'WROTE',
      label: 'WROTE',
      collection: 'WROTE',
      from: 'Person',
      to: 'Movie',
      attributes: [],
    },
    {
      name: 'FOLLOWS',
      label: 'FOLLOWS',
      collection: 'FOLLOWS',
      from: 'Person',
      to: 'Person',
      attributes: [],
    },
    {
      name: 'DIRECTED',
      label: 'DIRECTED',
      collection: 'DIRECTED',
      from: 'Person',
      to: 'Movie',
      attributes: [],
    },
  ],
};

export const movieSchema = SchemaUtils.schemaBackend2Graphology(movieSchemaRaw);
