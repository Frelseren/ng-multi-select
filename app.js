/** Angular Multiselect Filter App */
import angular from "angular";

angular
    .module("msApp", [])
    .controller("msCtrl", msCtrl)
    .filter("msFilter", msFilter);

function msFilter() {
    return (input, config) => {
        if (!config.all) {
            input = input.filter((item) => {
                return config.match.indexOf(item[config.key]) > -1;
            });
        }
        return input;
    }
}

function msCtrl() {
    class Config {
        constructor(key, all, match) {
            this.key = key;
            this.all = all || true;
            this.match = match || [];
        }
    }
    this.config = new Config("color");
    // this.config = new Config("color", false, this.colors);
    this.select = (config, value) => {
        this.config.all = false;
        let index = this.config.match.indexOf(value);
        if (index > -1) {
            this.config.match.splice(index, 1);
        } else {
            this.config.match.push(value);
        }
    };
    this.isSelected = (config, value) => {
        return this.config.match.indexOf(value) > -1;
    };
    this.cards = [{
        name: "Brainstorm",
        color: "Blue",
    }, {
        name: "Lightning Bolt",
        color: "Red",
    }, {
        name: "Giant Growth",
        color: "Green",
    }];
    this.colors = ["Red", "Blue", "Green"];
}