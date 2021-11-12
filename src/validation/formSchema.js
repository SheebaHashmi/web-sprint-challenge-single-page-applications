import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
            .string()
            .trim()
            .required("name is required").min(2,"name must be at least 2 characters"),
    size: yup.string().required(),
    pepperoni:yup.boolean(),
    mushroom:yup.boolean(),
    onion: yup.boolean(),
    olives: yup.boolean(),
    special: yup.string()
})
export default formSchema;