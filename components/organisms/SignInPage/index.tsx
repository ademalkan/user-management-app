import AppTitle from '@/components/atoms/AppTitle';
import LinkAtom from '@/components/atoms/LinkAtom';
import SignInForm from '@/components/molecules/SignInForm';
import DefaultLayout from '@/components/templates/AuthDefaultLayout';
import React from 'react';

const SignInPage: React.FC = () => {


  return (
    <DefaultLayout>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-smoke-white py-6 md:px-10 px-4">
        <div className="py-8 px-4 text-center">
          <div className="flex justify-center mb-6">
            <AppTitle barSize='h-8' textSize='text-2xl'/>
          </div>
          <div className="font-bold text-xl mb-2">Login In</div>
          <p className="text-muted text-xs">Enter your credentials to access your account</p>
        </div>
        <div className="px-5">
          <div className="w-full">
            <SignInForm />
            <p className="text-center text-gray-500 text-xs">
              Forgot your password? <LinkAtom href="/" className="text-dark-yellow">Reset Password</LinkAtom>
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignInPage;
