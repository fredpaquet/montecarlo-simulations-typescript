import * as React from "react";
import * as ReactDOM from "react-dom";
import RaisedButton from 'material-ui/RaisedButton';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

export interface HeaderProps {}
export interface HeaderState {open:boolean;}
export class Header extends React.Component<HeaderProps, HeaderState>{

    constructor(props: HeaderProps) {
        super(props);
        this.state = {open: false};
    }
    
    render() {
        return <div> 
              <AppBar
                title="Monte Carlo simulations"
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />               
              <Drawer 
                open={this.state.open} 
                onRequestChange={(open) => this.setState({open})}>
                
                <MenuItem onTouchTap={this.handleClose.bind(this)}>Démarrage</MenuItem>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>En cours</MenuItem>
              
              </Drawer>
              </div>;
    }

    handleClose(): void { 
        this.setState({open: false}); 
    }

    handleToggle(): void{
        this.setState({open: !this.state.open});
    };

    // callTheMenu(event: Object) : void{
    //     ReactDOM.render(
    //         document.getElementById("theDrawer")
    //     );
    // }
    
}
