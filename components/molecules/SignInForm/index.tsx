"use client"
import React, { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '@/components/atoms/Input';
import ButtonAtom from '@/components/atoms/ButtonAtom';
import { useDispatch } from 'react-redux';
import { actions } from '@/stores/auth-store';
import { useRouter } from 'next/navigation';
import { InputItemsI, inputItems } from '@/mocks/inputMocks';



const SignInForm: React.FC = () => {

    const router = useRouter();

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState<InputItemsI[]>(inputItems);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        setFormFields((prevFormFields) =>
            prevFormFields.map((field) =>
                field.id === id ? { ...field, value: e.target.value } : field
            )
        );
    };

    const handleSignIn = () => {
        const emailField = formFields.find((field) => field.id === 'email');
        const passwordField = formFields.find((field) => field.id === 'password');

        if (emailField?.value === 'test@gmail.com' && passwordField?.value === 'password') {
            dispatch(actions.login())
            toast.success('Login successful. You are being redirected');
            router.replace("/dashboard");
            router.refresh();
        } else {
            toast.error('Incorrect email or password!');
        }
    };

    return (
        <form>
            {formFields.map((field) => (
                <div className="mb-4" key={field.id}>
                    <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        label={field.label}
                        labelDesc={field.labelDesc}
                        labelFor={field.id}
                        value={field.value}
                        onChange={(e) => handleInputChange(e, field.id)}
                    />
                </div>
            ))}
            <div className="flex justify-center mb-4">
                <ButtonAtom onClick={handleSignIn}>Login In</ButtonAtom>
            </div>
        </form>
    );
};

export default SignInForm;
