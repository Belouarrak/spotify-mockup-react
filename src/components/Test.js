import PlaylistService from "../api/PlaylistService";
import {useQuery} from 'react-query';
import React from "react";
import {Button} from "@material-ui/core";
import axios from 'axios';
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import { MemoryRouter as Router } from 'react-router';
import {
    BrowserRouter,
    Switch as SwitchDom,
    Route,
    Link as RouterLink
} from "react-router-dom";
require('dotenv').config();

export default function ListPlaylists() {
    const [query, setQuery] = useState(["Muse"]);
    const [playlist, setPlaylists] = useState([])
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const watchAllFields = watch();
    const onSubmit = (data, e) => {
        setQuery([data.query]);
        console.log("onSubmit", data.query)
    }


    const loadIssues = async () => {
        const url = "https://api.spotify.com/v1/search?q=" + query + "&type=playlist&market=US&limit=10&offset=5";
        const response = await axios.get(url, {headers: process.env.REACT_APP_AUTH_KEY});
        console.log("setIssues", response.data.playlists.items);
        setPlaylists(response.data.playlists.items);

    }

    console.log("watchAlLFields", watchAllFields);

    useEffect(() => {
        loadIssues();

    }, [query]);


    return (
        <div>
            <h1>WebsiteZ</h1>
            <div>
                <p>Rechercher une playlist dans Spotifyd
                </p>
                <input type="text" id="fname" name="fname" value="John"/>
                <input type={"submit"} value={"submit"}/>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("query", {required: true})} />
                    <input type="submit" value={"submit"}/>

                </form>

                {query}

                <br />
                <br />
                <Router>
                <div>
                    {playlist.map((items) =>
                    <div>
                         {items.name} - {items.description}  <Button color={"primary"} component={RouterLink} to="/spotify" >Voir</Button>
                    </div>)}
                </div>
                </Router>

                <p></p>
            </div>
        </div>
    )


}