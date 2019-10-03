export const createUser = (formValues) => {
    return {
        type: 'CREATE_USER',
        payload: formValues
    }
}