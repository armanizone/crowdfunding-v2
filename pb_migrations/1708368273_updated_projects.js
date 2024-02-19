/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8q6slxl7ecp7kb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqhv5jx4",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8q6slxl7ecp7kb")

  // remove
  collection.schema.removeField("qqhv5jx4")

  return dao.saveCollection(collection)
})
