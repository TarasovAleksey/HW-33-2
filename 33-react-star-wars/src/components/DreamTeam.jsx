import React, {Component} from 'react';

class DreamTeam extends Component {
    render() {
        return ( //TODO fix images
            <section className="float-end w-50 row border mx-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                <img className="col-4 p-1" src="../Images/friend1.jpg" alt="friend"/>
                <img className="col-4 p-1" src="../Images/friend2.jpg" alt="friend"/>
                <img className="col-4 p-1" src="../Images/friend3.jpg" alt="friend"/>
                <img className="col-4 p-1" src="../Images/friend4.jpg" alt="friend"/>
                <img className="col-4 p-1" src="../Images/friend5.jpg" alt="friend"/>
                <img className="col-4 p-1" src="../Images/friend6.jpg" alt="friend"/>
                <img className="bottom-left col-4 p-1" src="../Images/friend7.jpg" alt="friend"/>
                <img className="col-4 p-1" src="../Images/friend8.jpg" alt="friend"/>
                <img className="bottom-right col-4 p-1" src="../Images/friend9.jpg" alt="friend"/>
            </section>
        );
    }
}

export default DreamTeam;