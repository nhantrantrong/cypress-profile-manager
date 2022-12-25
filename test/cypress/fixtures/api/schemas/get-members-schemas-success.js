export const getListMembersSchemaSuccess = {
    "type": "array",
    "items": [
        {
            "type": "object",
            "properties": {
                "firstName": {
                    "type": "string"
                },
                "lastName": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                },
                "company": {
                    "type": "string"
                },
                "phoneNumber": {
                    "type": "string"
                },
                "website": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                }
            },
            "required": [
                "firstName",
                "lastName",
                "title",
                "company",
                "phoneNumber",
                "website",
                "email",
                "id"
            ]
        }
    ]
}