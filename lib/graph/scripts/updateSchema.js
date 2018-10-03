import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import { Schema } from '../schema';

/* eslint-disable no-console */

(async () => {
  const result = await (graphql(Schema, introspectionQuery));
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2),
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../schema.json'),
      JSON.stringify(result, null, 2),
    );
  }
})();

fs.writeFileSync(
  path.join(__dirname, '../schema.graphql'),
  printSchema(Schema),
);
