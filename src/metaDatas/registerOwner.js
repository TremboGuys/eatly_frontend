export const arrayFormData = [
    {
        field: "number_document",
        type: "number",
        forId: "numberDocument",
        label: "Número do documento",
        maxlength: "30"
    },
    {
        field: "date_birth",
        type: "date",
        forId: "date",
        label: "Data de nascimento",
        maxlength: "10"
    },
    {
        field: "email",
        type: "email",
        forId: "email",
        label: "Email",
        maxlength: "60"
    },
    {
        field: "password",
        type: "password",
        forId: "password",
        label: "Senha",
        maxlength: "60"
    },
    {
        field: "number_e164",
        type: "number",
        forId: "phone",
        label: "Telefone",
        maxlength: "20"
    },
    {
        field: "zipcode",
        type: "number",
        forId: "zipcode",
        label: "CEP",
        maxlength: "8"
    },
    {
        field: "street",
        type: "text",
        forId: "street",
        label: "Endereço",
        maxlength: "100"
    },
    {
        field: "number",
        type: "text",
        forId: "number",
        label: "Número"
    },
    {
        field: "district",
        type: "text",
        forId: "district",
        label: "Bairro",
        maxlength: "50"
    },
    {
        field: "city",
        type: "text",
        forId: "city",
        label: "Cidade",
        maxlength: "50"
    },
];

export const typeDocumentFormData = {
    label: "Tipo de documento",
    id: "typeDocument",
    options: [
        {
            label: "CPF",
            value: "cpf"
        },
        {
            label: "CNH",
            value: "cnh"
        },
        {
            label: "Passaporte",
            value: "passport"
        }
    ]
}