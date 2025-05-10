import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
    const handleClick = () => {
        alert('Button inside MyAwesomeComponent clicked!');
    };

    return (
        <>
            <Box appendClasses="box-small border-red">
                <Text size="small" color="green">Small Box</Text>
            </Box>

            <Box appendClasses="box-medium">
                <Text size="medium" color="blue">Medium Box</Text>
            </Box>

            <Box appendClasses="box-large">
                <Text size="large" color="purple">Large Box</Text>
                <Button color="orange" onClick={handleClick}>Click Me</Button>
            </Box>

        </>
    );
};

export default MyAwesomeComponent;
