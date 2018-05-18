import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Header from '../../UI/Header/Header';

class MainView extends Component {
    render() {
        const imgPath = "";
        return (
            <div className={"App"}>
                <Header>Satellite-Background</Header>
                <img className={"Img"} src={imgPath} alt="satellite-image" />
                <div layout="row">
                    <RaisedButton className={"Button"} label="Load new Image" />
                    <RaisedButton className={"Button"} label="Change Background" primary={true} />
                </div>
            </div>
        )
    }
}

export default MainView;
