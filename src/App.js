import './App.css';
import React from "react";
import Cover from "./components/Cover";
import {Button, withStyles} from "@material-ui/core";
import WifiIcon from '@material-ui/icons/Wifi';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import Track from './components/Track';
import Download from './components/Download';
import FollowingButton from './components/FollowingButton'
import {
    BrowserRouter as Router,
    Switch as SwitchDom,
    Route,
    Link
} from "react-router-dom";
import Followers from "./components/Followers";
import Test from './components/Test';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useForm } from "react-hook-form";
require('dotenv').config();
import axios from 'axios';

const ShuffleButton = withStyles({
    root: {
        background: '#1ed760',
        borderRadius: 100,
        color: 'white',
        height: 48,
        width: 230,
        padding: '0 30px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

//axios.defaults.headers.common['access_token'] = 'BQBjOzNohZot1USEPO7kRlD2H6xKNYqsXryBIXcJrp1F4rLzVe_2rQHlNkI1MGYkedv7fpUYpLGMg8-mWZAewtKGTOrHNoEjl84cX8J7S7gctGmFXiQn8oyYZGDCbb3OBrnPrZy9339AAfngbRfyVJZVtmhSwo2s7t6IzCCgw1LuHaKcEOzxfyPSPhPueeraz4RFz3DCEhKlNNo8h9lHZ-YItuFCuE3TAQyOVU8C7kf8m-PPs19xjiKjY__KXzhps3qMhwGwtx8fpGJzZFmfC1Jxe2p0pktbm2RovnHh';

const queryClient = new QueryClient();

function App(props) {
    return (
        <QueryClientProvider client={queryClient}>
        <div>
            <Router>
                <SwitchDom>
                    <Route exact path={"/spotify"}>
                        <div className={"column"}>



                            <div className={"header-container"}>
                                <div className={"time"}>16:21</div>
                                <div>
                                    <SignalCellularAltIcon fontSize="small"/>
                                    <WifiIcon fontSize="small"/>
                                    <BatteryFullIcon fontSize="small"/>
                                </div>
                            </div>
                            <div className={"padding"}/>
                            <Cover/>
                            <h2 className={"title"}>{props.name}</h2>
                            <FollowingButton />
                            <Followers/>
                            <ShuffleButton>SHUFFLE PLAY</ShuffleButton>
                            <Download/>
                            <Track/>
                            <Track/>
                            <Track/>
                            <Track/>
                            <Track/>
                        </div>

                    </Route>
                    <Route path="/Playlist" component={Home} />
                </SwitchDom>

            </Router>
        </div>
        </QueryClientProvider>
    );
}

const Home = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <Test />
    )
}

export default App;
