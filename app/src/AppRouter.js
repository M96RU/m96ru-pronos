import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Matches from "./Matches";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>Hello world!</div>
                } />
                <Route path="/matches" element={
                    <Matches />
                } />
            </Routes>
        </BrowserRouter>
    )
}