export const input = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "title": "Object With Array Field",
  "properties": {
    "data": {
      "type": "array",
      "title": "Array Items",
      "items": {"$ref": "#/definitions/item"}
    }
  },
  "definitions": {
    "item": {
      "title": "Array Item",
      "type": "object",
      "properties": {
        "prop": {
          "type": "string"
        }
      },
      "required": ["prop"],
      "additionalProperties": false
    }
  },
  "required": ["data"],
  "additionalProperties": false
}

export const output = `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export type ArrayItems = ArrayItem[];

export interface ObjectWithArrayField {
  data: ArrayItems;
}
export interface ArrayItem {
  prop: string;
}
`