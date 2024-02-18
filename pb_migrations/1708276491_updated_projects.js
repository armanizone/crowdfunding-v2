/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8q6slxl7ecp7kb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwdnxpog",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8q6slxl7ecp7kb")

  // remove
  collection.schema.removeField("cwdnxpog")

  return dao.saveCollection(collection)
})
