import Bottle from "../bottle.js";
import Proxy  from "../node_modules/harmony-proxy/index.js";
import Fuel   from "./Fuel.js";
import Engine from "./Engine.js";
import Car    from "./Car.js";

class handler {
    static get(bottle, name){
        return bottle.container[name];
    }
};

let bottle = new Bottle();

bottle.factory('Gasoline', function(){
    return new Fuel('Gasoline');
});

bottle.factory('Diesel', function(){
    return new Fuel('Diesel');
});

bottle.factory('DieselEngine', function(container){
    return new Engine('v6', container.Diesel);
});

bottle.factory('GasolineEngine', function(container){
    return new Engine('v12', container.Gasoline);
});

bottle.factory('Toyota', function(container){
    return new Car(container.DieselEngine);
});

bottle.factory('Ferrari', function(container){
    return new Car(container.GasolineEngine);
});

export default new Proxy(bottle, handler);
