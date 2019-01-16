var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 10; // type inference
//x = 'ABC';
var s; // type annotation
function Add(x, y) {
    return x + y;
}
function Subtract(x, y) {
    return x - y;
}
var Car = (function () {
    function Car(n, s) {
        this.name = n;
        this.speed = s;
    }
    Car.prototype.Accelerate = function () {
        console.log('VVRROMM...');
    };
    return Car;
}());
var JamesBondCar = (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(n, s, canFly) {
        var _this = _super.call(this, n, s) || this;
        _this.canFly = true;
        _this.canFly = canFly;
        return _this;
    }
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar('Houston', 200, true);
