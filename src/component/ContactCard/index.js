
import React from 'react';
import PropTypes from 'prop-types';
import StyledContactCard, {Intro, Name} from "./style";
import Avatar from "../Avatar";
import face from '../../assets/images/face-3.jpg'

function ContactCard ({contact, children, ...rest}) {
        return (
            <StyledContactCard { ...rest }>
                <Avatar src={contact.avatar} status={'online'} />
                <Name>{contact.name}</Name>
                <Intro>{contact.intro}</Intro>
            </StyledContactCard>
        );
}

ContactCard.propTypes = {
    children: PropTypes.any
};

export default ContactCard;
