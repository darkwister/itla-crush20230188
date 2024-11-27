import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

    const UseSwal = withReactContent(Swal);

    const successAlert = (title) =>
    {
        return UseSwal.fire({
            title: title,
            footer: "Itla Crush",
            icon: "success"
        })

    }

    const failureAlert = (title) =>{
        return UseSwal.fire({
            title: title,
            footer: "Itla Crush",
            icon: "error"
        })
    }

    export{ successAlert, failureAlert }
