import React from 'react'
import { Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import EditableInput from '../EditableInput';

const Dashboard = ({onSignOut}) => {

    const { profile } = useProfile();

    const onSave = async newData => {
        console.log(newData);
    };

    return <>
    <Drawer.Header>
        <Drawer.Title>
           Dashboard
        </Drawer.Title>
    </Drawer.Header>

    <Drawer.Body>
       <h3>hey -{profile.name}</h3>
       <Divider />
       <EditableInput
       name ="nickname"
       initialValue={profile.name}
       onSave={onSave}
       label={<h6 className='mb-2'>nickname</h6>}
        />
    </Drawer.Body>
    <Drawer.Footer>
        <Button block color='red' onClick={onSignOut} />
        Sign out
    </Drawer.Footer>
    </>
};

export default Dashboard;
