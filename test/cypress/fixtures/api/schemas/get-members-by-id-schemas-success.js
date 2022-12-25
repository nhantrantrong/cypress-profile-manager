export const getMemberByIdSchemaSuccess = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
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
        }
    },
    "required": [
        "id",
        "firstName",
        "lastName",
        "title",
        "company",
        "phoneNumber",
        "website",
        "email"
    ]
}