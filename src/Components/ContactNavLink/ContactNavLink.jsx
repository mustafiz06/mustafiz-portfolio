import React from 'react';

const ContactNavLink = ({contactNav}) => {
    console.log(contactNav);
    return (
        <div>
            <a href={contactNav.url}>
                <img className='h-5 md:h-10 rounded-full' target="_blank" src={contactNav.icon} alt="" />
            </a>
        </div>
    );
};

export default ContactNavLink;