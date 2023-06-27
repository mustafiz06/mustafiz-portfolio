import React from 'react';
import ContactNavLink from '../ContactNavLink/ContactNavLink';
// import { Link } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMessage, faHome} from '@fortawesome/free-solid-svg-icons';

const ContactNav = () => {
    const ContactNavIcon=[
        {id:1, name:'Facebook', icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrp8PBNdjm8opN9DkyL2s3eIXmvgeWfWbow&usqp=CAU', url:'https://www.facebook.com/lxmustafiz'},
        {id:1, name:'Instragram', icon:'https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg', url:'https://www.instagram.com/mustafizur06/'},
        {id:1, name:'LinkIn', icon:'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png', url:'https://www.linkedin.com/in/mustafizur-rahman-a8933824a/'},
        {id:1, name:'Dribble', icon:'https://cdn-icons-png.flaticon.com/512/124/124037.png', url:'https://dribbble.com/M_Fiz'},
        {id:1, name:'Twitter', icon:'https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png', url:'https://twitter.com/'},
    ]
    return (
        <div className='flex gap-3 justify-center py-2'>
            {
                ContactNavIcon.map(contactNav => <ContactNavLink key={contactNav.id} contactNav={contactNav}></ContactNavLink>)
            }
            
        </div>
    );
};

export default ContactNav;