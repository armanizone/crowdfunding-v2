/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8q6slxl7ecp7kb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5lzueyjz",
    "name": "goal",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmusgy4m",
    "name": "city",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txir7mmz",
    "name": "duration",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8q6slxl7ecp7kb")

  // remove
  collection.schema.removeField("5lzueyjz")

  // remove
  collection.schema.removeField("rmusgy4m")

  // remove
  collection.schema.removeField("txir7mmz")

  return dao.saveCollection(collection)
})
