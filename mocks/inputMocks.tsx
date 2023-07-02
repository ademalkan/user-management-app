
export interface InputItemsI {
    id: string;
    type: string;
    placeholder: string;
    value: string;
    label: string;
    labelDesc: string;
}


export const inputItems: InputItemsI[] = [
    {
        id: 'email',
        type: 'text',
        placeholder: 'Enter your email',
        value: '',
        label: 'Email',
        labelDesc: 'demo: test@gmail.com',
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Enter your password',
        value: '',
        label: 'Password',
        labelDesc: 'demo: password',
    },
]