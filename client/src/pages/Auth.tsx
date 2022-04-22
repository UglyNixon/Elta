import React, {FC} from 'react';
import ForModal from "../components/UI/forModal/ForModal";
import AuthModal from "../components/AuthModal/AuthModal";

const Auth:FC = () => {

    return (
       <ForModal >
            <AuthModal/>
       </ForModal>


    );
};

export default Auth;