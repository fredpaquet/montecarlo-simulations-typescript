/// <reference path="../typings/globals/jest/index.d.ts" />

//import React from "react";
const React = require("react");
const renderer = require("react-test-renderer");

import {Forecast} from "../src/Forecast";
import {ForecastItems} from "../src/forecastItems";
import {Percentile} from "../src/Percentile";
import {ResultsDisplay} from "../src/components/resultsDisplay";

describe("ResultsDisplay test suite", () => {
    
    var expectedPercentile = new Percentile(0.5);
    var expectedItems = 100;
    var expectedDays = 30;

    it("First test", () => {

        let fc = new Array<Forecast>(1);
        fc[0] = new ForecastItems(
            expectedPercentile,
            expectedItems,
            expectedDays);

        const component = renderer.create(
            <ResultsDisplay forecasts={fc} />).toJSON();
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();;
    });
});