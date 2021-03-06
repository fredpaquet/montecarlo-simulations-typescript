/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react-dom/react-dom.d.ts" />
/// <reference path="../../typings/globals/material-ui/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Forecast} from "../forecast";

export interface ResultsProps { 
    numberOfDays: number,
    numberOfItems: number,    
    numberOfSimulations: number,
    forecasts: Forecast[]; 
}

// 'ResultsProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class ResultsDisplay extends React.Component<ResultsProps, undefined> {
    render(): JSX.Element {

    let fc = this.props.forecasts;
    const listItems = fc.map((currentForecast, index, arr) =>
        <li key={currentForecast.Percentile.value}>{currentForecast.toString()}</li>
    );

    return <div>
            <h1>Forecasts for delivering items in {this.props.numberOfDays} days ({this.props.numberOfSimulations} simulations)</h1>
            <ul>{listItems}</ul> 
           </div>;
    }
}