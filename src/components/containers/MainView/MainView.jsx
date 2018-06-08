import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Header from '../../UI/Header/Header';
import wallpaper from 'wallpaper';  

class MainView extends Component {
    changeBG = () => {
        wallpaper.get().then(imagePath => {
            console.log("imgpath",imagePath);
        });
    }

    render() {
        const imgPath = "";
        return (
            <div className={"App"}>
                <Header>Satellite-Background</Header>
                <img className={"Img"} src={imgPath} alt="satellite-image" />
                <div layout="row">
                    <RaisedButton className={"Button"} label="Load new Image" />
                    <RaisedButton className={"Button"} onClick={this.changeBG} label="Change Background" primary={true} />
                </div>
            </div>
        )
    }
}

export default MainView;
